var app = new Vue({
    el: '#app',
    data: {
        stockImages: [],
        // stockImages: [{
        //     img: "https://firebasestorage.googleapis.com/v0/b/success-looks-like-this.appspot.com/o/codette-shutterstock%2Fladies-doing-business.jpg?alt=media&token=0b4dd173-8c3c-4806-a04a-b175ee55eb07",
        //     price: 12,
        //     tag: "business",
        //     title: "Ladies in business"
        // }, {
        //     img: "https://firebasestorage.googleapis.com/v0/b/success-looks-like-this.appspot.com/o/codette-shutterstock%2Fladies-doing-business2.jpg?alt=media&token=bb1f2057-16ae-4755-99a3-451d218a9fc8",
        //     price: 10,
        //     tag: "business",
        //     title: "ladies in business2"
        // },{
        //     img: "https://firebasestorage.googleapis.com/v0/b/success-looks-like-this.appspot.com/o/codette-shutterstock%2Fladies-doing-business.jpg?alt=media&token=0b4dd173-8c3c-4806-a04a-b175ee55eb07",
        //     price: 12,
        //     tag: "business",
        //     title: "Ladies in business"
        // }, {
        //     img: "https://firebasestorage.googleapis.com/v0/b/success-looks-like-this.appspot.com/o/codette-shutterstock%2Fladies-doing-business2.jpg?alt=media&token=bb1f2057-16ae-4755-99a3-451d218a9fc8",
        //     price: 10,
        //     tag: "business",
        //     title: "ladies in business2"
        // },{
        //     img: "https://firebasestorage.googleapis.com/v0/b/success-looks-like-this.appspot.com/o/codette-shutterstock%2Fladies-doing-business.jpg?alt=media&token=0b4dd173-8c3c-4806-a04a-b175ee55eb07",
        //     price: 12,
        //     tag: "business",
        //     title: "Ladies in business"
        // }, {
        //     img: "https://firebasestorage.googleapis.com/v0/b/success-looks-like-this.appspot.com/o/codette-shutterstock%2Fladies-doing-business2.jpg?alt=media&token=bb1f2057-16ae-4755-99a3-451d218a9fc8",
        //     price: 10,
        //     tag: "business",
        //     title: "ladies in business2"
        // },{
        //     img: "https://firebasestorage.googleapis.com/v0/b/success-looks-like-this.appspot.com/o/codette-shutterstock%2Fladies-doing-business.jpg?alt=media&token=0b4dd173-8c3c-4806-a04a-b175ee55eb07",
        //     price: 12,
        //     tag: "business",
        //     title: "Ladies in business"
        // }, {
        //     img: "https://firebasestorage.googleapis.com/v0/b/success-looks-like-this.appspot.com/o/codette-shutterstock%2Fladies-doing-business2.jpg?alt=media&token=bb1f2057-16ae-4755-99a3-451d218a9fc8",
        //     price: 10,
        //     tag: "business",
        //     title: "ladies in business2"
        // }],
        isLoading: true
    },
    created: function () {
        // `this` points to the vm instance
        this.populateFromDb();
    },
    methods: {
        populateFromDb: function () {
            db.collection("stockImages").get().then((querySnapshot) => {
                this.isLoading = true;
                querySnapshot.forEach((doc) => {
                    this.stockImages.push(doc.data())
                });
            }).then(() => {
                initialiseGrid();

                this.isLoading = false;
            });
        }
    }
})