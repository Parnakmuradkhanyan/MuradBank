class Model {
   constructor() {
       
   }


}

class View {
   constructor() {

       this.userPhoto = document.getElementById('userPhoto');
       this.previewImage = document.getElementById('preview');
       this.errorMessage = this.userPhoto.nextElementSibling;
   }

   clearInput() {
       this.userPhoto.value = '';
       this.errorMessage.textContent = '';
   }

   displayImage(src) {
       this.previewImage.src = src;
   }
}

class Controller {
   constructor(model, view) {
       this.model = model;
       this.view = view;


       this.view.userPhoto.addEventListener('change', this.handlePhotoChange.bind(this));
   }

   handlePhotoChange(event) {
       const input = event.target;
       if (input.files && input.files[0]) {
           const reader = new FileReader();
           reader.onload = (e) => {
               this.view.displayImage(e.target.result);
           };
           reader.readAsDataURL(input.files[0]);
       }
       this.view.clearInput();
   }
}

const model = new Model();
const view = new View();
const controller = new Controller(model, view);
