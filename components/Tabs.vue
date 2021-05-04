<template>
    <div class="flex-grow mb-12 pb-4">
        <slot v-if="visibleTab == 'tab1'" name="tab1"></slot>
        <slot v-if="visibleTab == 'tab2'" name="tab2"></slot>
        <div class="fixed bottom-0 left-0 bg-white w-full h-12 border-t border-black flex flex-row items-center justify-around">
            <span class="cursor-pointer" @click="visibleTab = 'tab1'">List</span>
            <span class="cursor-pointer" @click="visibleTab = 'tab2'">Map</span>
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






