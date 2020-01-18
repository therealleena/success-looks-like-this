var app = new Vue({
    el: '#app',
    data: {
        stockImages:[
            {"img":"https://firebasestorage.googleapis.com/v0/b/success-looks-like-this.appspot.com/o/codette-shutterstock%2Flady-engineering.jpg?alt=media&token=1e6c7b85-02ed-4551-8285-02aea6682b34","price":10,"tag":"engineering","title":"Lady in Engineering"},
        ],
        isLoading:false
    },
    created: function () {
        // `this` points to the vm instance
        this.populateFromDb();
    },
    methods: {
        populateFromDb: function () {
            const stockImagesFromDb = []
            db.collection("stockImages").get().then((querySnapshot) => {
                this.isLoading=true;
                querySnapshot.forEach((doc) => {
                    stockImagesFromDb.push(doc.data())
                });
            }).then(()=> {
                this.stockImages = [...this.stockImages, stockImagesFromDb];
                console.log("this.stockImages", JSON.stringify(this.stockImages))
                this.isLoading=false;
            });
        }
    }
  })