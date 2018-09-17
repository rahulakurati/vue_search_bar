<template>
    <div class="search-box">
        <div class="input-group mb-3">
            <input type="text" class="form-control txt-search" placeholder="Search by name" @keydown.enter="clickHandler" v-model="txtInput">
            <div class="input-group-addon" @click="clickHandler">
                <span class="input-group-text">
                    <font-awesome-icon icon="search" />
                </span>
            </div>
        </div>
    </div>
</template>

<script>
require('jquery/src/jquery');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.min.js');
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch);

    export default {
        data() {
            return{
                txtInput: ''
            }
        },
        props: {
            path: ''
        },
        methods: {
            clickHandler() {
                $.ajax({
                    url: this.path,
                    dataType: 'script',
                    method: 'GET',
                    data: {
                        name: this.txtInput
                    }
                });
            }
        },
        components: {
            'font-awesome-icon': FontAwesomeIcon
        }
    }
</script>

<style>
    .input-group {
        width: 100%;
    }
    .txt-search {
        width: 95%;
    }
    .input-group-addon {
        width: 50px;
    }
    .input-group-addon {
        cursor: pointer;
    }
</style>