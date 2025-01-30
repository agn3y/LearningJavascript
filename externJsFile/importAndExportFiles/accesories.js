export const accesories = {
    'Mobile' :{
      modelName : 'Iphone 7 Plus',
      RAM :'2GB',
      ROM : '32GB',
      Year : 2018,
      color : 'black',
      'iosVersion' : '15.8.3'
      },
      Keyboard : {
        color : 'Silver',  
        size : '16cm',
        company : 'iVOOMi',
        store : 'flipkart'
      },
      Earphone : {
        type : 'wireless',
        company: 'number',
        price : 1800,
        chraging : 'Type-c',
        color : 'red-green-blue'
      }
    }

    //exporting a function

    export function myData(){
        const myData = accesories
        console.log(myData);
        return 0
    }

    export default accesories //second way to write default export