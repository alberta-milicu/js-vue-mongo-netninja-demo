<template>
    <body>
        <div>
            <div id="friends" v-show="this.showList">
                <ul>
                    <li v-for="friend in friends" v-on:click="friend.show = !friend.show;
                    friend.showDeleteBtn = !friend.showDeleteBtn" id="fr">
                        <h2>{{ friend.name }}</h2>
                        <h3 v-show="friend.show">Age: {{ friend.age }}</h3>
                        <button v-show="friend.showDeleteBtn" 
                                @click="deleteFriend(friend.id)">DELETE</button>
                    </li>
                    <li>
                        <button v-on:click="showList = false; showAdd = true    "> + </button>
                    </li>
                </ul>
            </div>
            <div id="friends" v-show="this.showAdd">
                <form action="/friends" method="POST">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Name" v-model="newName" required>
                    <br>
                    <label for="age">Age:</label>
                    <input type="text" id="age" name="age" placeholder="Age" v-model="newAge" required>
                    <br>
                </form>
                <button v-on:click="showList = true; showAdd = false;
                addFriend();"> Submit </button>
            </div>
        </div>
    </body>
</template>
   
<script lang="ts">

import "babel-polyfill";
import axios from 'axios';

export default {
    data() {
        return {
            friends: [],
            showList: true,
            showAdd: false,
            newName: "",
            newAge: ""
        }
    },
    mounted() {
        this.getFriend();
    },
    methods: {
        async getFriend() {
            console.log('entered getFriend')
            let result = await axios
                .get("http://localhost:3000/friends/")
            for (const res of result.data) {
                let fr = {
                    id: res._id,
                    name: res.name,
                    age: res.age,
                    show: false,
                    showDeleteBtn: false,
                };
                this.friends.push(fr);
                //console.log(fr.id);
            }
        },

        async addFriend() {
            let fr = {
                name: this.newName,
                age: this.newAge
            };
            let result = await axios
                .post("http://localhost:3000/friends/", fr)
            console.log("Entered post");
        },

        async deleteFriend(id) {
            console.log("Entered delete");
            let result = await axios
                .delete("http://localhost:3000/friends/", {
                    data: { id: id }
                })
        }
    }
}
</script>
   
<style scoped>
#friends {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}

ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}

li#fr {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 10px;
    border: 10px solid rgb(247, 203, 188);
    margin: 20px;
    border-radius: 30px;
    background-color: rgb(255, 229, 220);
}

button {
    text-align: center;
    padding: 20px;
    border-radius: 40px;
    margin: 50px 0;
    font-size: large;
    font-weight: 800;
    color: rgb(255, 229, 220);
    background-color: rgb(248, 100, 46);
}
</style>
   