var todoVue = new Vue({
    el:"#main",
    data:{
        tags:[], // 标签容器
        todoLists:[], // todo列表
        listCurrent:0, // 当前列表索引
        tagCurrent:null, //当前标签索引
        showModal:false,
        tagShowModal:false,
        removeTagOn:false
    },
    methods:{
        changeItem:function(index){
            this.listCurrent = index;
        },
        addList:function(){
            this.showModal = true;
        },
        removeList:function(){
            this.todoLists.splice(this.listCurrent,1);
            this.listCurrent = 0;
        },
        addInputList:function(){
            var listTmpTags = [];
            var self = this;
            if(this.inputListName !== undefined && this.inputListName !== "" && this.inputTagName !== undefined && this.inputTagName !== ""){
                var tagsNames = this.inputTagName.split(',');
                tagsNames.forEach(function(tagName){
                    listTmpTags.push(tagName)
                    if(self.tags.indexOf(this.inputTagName) == -1){
                        self.tags.push(tagName);
                    }
                });
                this.todoLists.push({name:this.inputListName,tags:listTmpTags});
                this.listCurrent = this.todoLists.length - 1;
                this.showModal = false;
            }else{
                alert('不能为空')
            }
        },
        closeModal:function(){
            this.showModal = false;
            this.tagShowModal = false;
        },
        addInputTag:function(){
            var tagsNames = this.addTagName.split(',');
            var self = this;
            tagsNames.forEach(function(tagName){
                if(self.tags.indexOf(this.addTagName) == -1){
                    self.tags.push(tagName);
                }
                self.todoLists[self.listCurrent].tags.push(tagName);
            })
            this.tagShowModal = false;
            this.removeTagOn = false;
        },
        removeTag:function(index){
            this.todoLists[this.listCurrent].tags.splice(index,1);
            this.removeTagOn = false;
        },
        addListTag:function(){
            this.tagShowModal = true;
        },
        removeListTag:function(){
            this.removeTagOn = !this.removeTagOn;
        },
        changeTag:function(tagName){
            this.tagCurrent = tagName;
            this.listCurrent = 0;
        },
        showAllTag:function(){
            this.tagCurrent = null;
        }
    }
});
