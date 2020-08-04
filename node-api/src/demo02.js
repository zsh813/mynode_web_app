var app = new Vue({
    el: '#app',
    data: {
        message: "",
        ddList: [],
        doneList: [],
        count: "0",
        doneCount: "0",
        // showL:[],
    },
    methods: {
        add() {
            if (this.message) {
                this.ddList.push({txt:this.message});
                this.message = "";
                this.count++;
                // this.showL.push(true);
            }
        },
        finish(index) {
            this.doneList.push({txt:this.ddList[index].txt});
            this.doneCount++;
            this.ddList.splice(index, 1);
            this.count--;
            // this.showL.splice(index, 1);
        },
        cencel(index) {
            this.ddList.push({txt:this.doneList[index].txt});
            this.count++;
            this.doneList.splice(index, 1);
            this.doneCount--;
            // this.showL.push(true);
        },
        remove(index){
            this.ddList.splice(index, 1);
            this.count--;
            // this.showL.splice(index, 1);
        },
        removeDone(index){
            this.doneList.splice(index, 1);
            this.doneCount--;
        },
        // changeText(index){
        //     if(this.showL[index]==true){
        //         this.showL[index]=false;
        //     }else{
        //         this.showL[index]=true;
        //     }
        // },


    }
})

