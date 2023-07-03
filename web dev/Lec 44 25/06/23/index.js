console.log(" chalaye start karte hain");
 // object create
   
 let rectangle ={
    length:1,
    breadth:2,

    draw: function() {
        console.log('drawing rectangle');
    }
 };



 
   // factory function
   function createRectangle(len, bre){

    return rectangle ={
        length:len,
        breadth:bre,
        draw() {
            console.log('draawing rectangle');
        }
    };
   }
   let rectangleObj1 = createRectangle(5,4);
   let rectangleObj2 = createRectangle(15,8);

   // constructor function
     function Rectangle(len,bre ) {
        this.length = len;
        this.beadth = bre;
        this.draw = function(){
            console.log('drawing');
        }
     }
        let rectangleObject = new Rectangle(4,8)
             rectangleObject.color = 'yellow';
        console.log(rectangleObject);

        delete rectangleObject.color;
        console.log(rectangleObject);
        
           let a=10;
           let b=a;
           a++;
           console.log(a);
           console.log(b);

         let c ={ fazal: 10};
         let d= c;
         c.fazal++;
         console.log(c.fazal);
         console.log(d.fazal );
          let v = {value:10};
          function inc(v){
            v.value++;
          }
          inc(v)
          console.log(v.value);



          let rectangle1 ={
            length:2,
            breadth:4,
          };
          // for-in loop
          for(let key in rectangle1) {
            //keys are reflected through key variable
            // value are reflected through rectangle[key]
            console.log(key,rectangle1[key]);
          }
          for(let key of Object.entries(rectangle1)){
            console.log(key);
          }
          // ik you want to any properties then this
          if('color'in rectangle1){
            console.log('present');
          }
          else{
        
            console.log('absent');
          }
          // object cloning//
          // iteration cloning
          let src = {value1:10,value2:39,value3:78};
          let des = {};
          for(let key in src){
            des[key] = src[key];
                console.log(des)
          }
          // assign
          let src1 = {value1:89};
          
          let dest = Object .assign({},src1);
          console.log(dest);
          src1.value++;
          console.log(dest)
           // spread
           let src3 ={a:45,b:46};
           let dest4 ={...src3};
           console.log(dest4);
          











































      