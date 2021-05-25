<template>
    <div class="flex flex-col flex-grow mb-12 pb-4 ">
        <slot v-if="visibleTab == 'tab1'" name="tab1"></slot>
        <slot v-if="visibleTab == 'tab2'" name="tab2"></slot>
        <div class="fixed bottom-0 left-0 bg-yellow-50 w-full h-12 border-t-2 border-black flex flex-row items-center justify-around z-30">
            <div class="cursor-pointer font-bold w-1/2 h-full hover:bg-blue-600 hover:text-white flex flex-row  place-items-center justify-center space-x-2" :class="{ currentTab: visibleTab == 'tab1'}" @click="visibleTab = 'tab1'">
                <svg class="stroke-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"  stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg> 
                <span>List</span>
            </div>
            <div class="cursor-pointer font-bold w-1/2 h-full hover:bg-blue-600 hover:text-white flex flex-row  place-items-center justify-center space-x-2" :class="{ currentTab: visibleTab == 'tab2'}"  @click="visibleTab = 'tab2'">
                <svg class="stroke-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg>
                <span>Map</span>
            </div>
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

<style scoped>
.currentTab {
    @apply bg-yellow-200
}

.currentTab:hover {
    @apply bg-yellow-200 text-black 
}
</style>






