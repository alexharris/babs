<template>
    <div class="flex flex-col flex-grow mb-12 pb-4">
        <slot v-if="visibleTab == 'tab1'" name="tab1"></slot>
        <slot v-if="visibleTab == 'tab2'" name="tab2"></slot>
        <div class="fixed bottom-0 left-0 bg-white w-full h-12 border-t-2 border-black flex flex-row items-center justify-around">
            <div class="cursor-pointer font-bold w-1/2 h-full hover:bg-blue-300 grid place-items-center" @click="visibleTab = 'tab1'">List</div>
            <div class="cursor-pointer font-bold    w-1/2 h-full hover:bg-blue-300 grid place-items-center" @click="visibleTab = 'tab2'">Map</div>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            visibleTab: 'tab1'
        }
    },
    methods: {

    }
}
</script>






