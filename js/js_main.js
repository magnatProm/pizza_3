const form__sauce=document.querySelector('.pizza__sauce'),
      form__cheese=document.querySelector('.pizza__cheese'),
      form__filling=document.querySelector('.pizza__filling'),
      form__incision=document.querySelector('.pizza__incision');

let width_check=100;
let cheese_check=[200,'сулугуни'];
let pizza_add_number=1;

const ingredient_check_mas_2={
}

const sauce_check={
}



      function remove(open1 , open2 , open3 , open4 , number){
        form__sauce.style.display=open1;
        form__cheese.style.display=open2;
        form__filling.style.display=open3;
        form__incision.style.display=open4;

        if(number!="nan"){
          document.querySelector(`.content .fieldset label:nth-child(${number}) input`).checked=true;
      }

      }

      // курсор
      const cursor=document.querySelector(".cursor");
let class_name="";

window.addEventListener('scroll', scroll_position);

function scroll_position(){
  return pageYOffset
}

window.addEventListener("mousemove", (event) => {
cursor.style.cssText = `
top: ${event.clientY + scroll_position()}px;
left: ${event.clientX }px;
z-index: 3;
`;
});


form__filling.addEventListener('click', (event) => {
  if (event.target.closest('.pizza__filling')&& !event.target.closest('[data-position]') && !class_name==""){
      const input=document.querySelector(`input[data-name=${class_name}]`);
      const width=form__filling.offsetHeight;

      if(input.value<40){
        input.value++;
      } else{
        return
      }
      form__filling.insertAdjacentHTML("afterbegin",
      `
      <div class="${class_name}" data-position style="${`top: ${Math.floor(100 * (event.offsetY-10) / width)}%; left: ${Math.floor(100 * (event.offsetX-10) / width)}%;`}">        
      </div>`
  );

  }
}
)

window.addEventListener("touchstart", ()=>{
  cursor.classList.add('none')
});
      // курсор



document.querySelector('.editor').addEventListener('click', (event) => {

    if(event.target.closest('input[data-add]')){
    add_pizza__filling(event.target)

    // курсор
    cursor.setAttribute("class", event.target.closest('input').getAttribute('data-name')+ " cursor");
    class_name=event.target.closest('input').getAttribute('data-name');
    // курсор
}


  if(event.target.closest('input[data-cheese]')){
    add_pizza__cheese(event.target)
}


  if(event.target.closest('input[data-sauce]')){
    add_pizza__sauce(event.target)
}

  if(event.target.closest('[data-pizza_add]')){
    pizza_add_number=event.target.value;
}

})

document.querySelector('.editor').addEventListener("keydown", (event)=>{
    if(event.target.closest('input[data-add]'))
    {add_pizza__filling(event.target)}
});

document.querySelector('.editor').addEventListener("keyup", (event)=>{
    if(event.target.closest('input[data-add]'))
    {add_pizza__filling(event.target)}
});

// _______

function add_pizza__filling(occasion) {
    const ingredient_name = occasion.closest('input').getAttribute('data-name'),
          number = occasion.closest('input[data-add]').value,
          ingredient = document.querySelectorAll(`.pizza__filling .${ingredient_name}`),
          price = occasion.closest('input').getAttribute('data-price');

        if(number==0){
          delete ingredient_check_mas_2[ingredient_name];
        } else{
          Object.assign(ingredient_check_mas_2, {[ingredient_name]:price*number});
        }


        //   +++++++
    remove('block' , 'block' , 'block' , 'none' , 4)
        //   +++++++


    function random_f(){
    const radians = Math.atan2(Math.floor(Math.random() * 400), Math.floor(Math.random() * 400));
    if(radians < 0 ) {radians += 2*Math.PI;}
    
       const random_r=Math.floor(Math.random() * (120));
       let x_1=random_r * Math.cos(Math.PI/radians);
       let y_2=random_r * Math.sin(Math.PI/radians);
    
    // x_1=Math.floor(-x_1+125);
    // y_2=Math.floor(-y_2+125);

    const width=form__filling.offsetHeight;
    // // Math.floor(100 * (event.offsetY-10) / width)
    x_1=Math.floor(100 * (-x_1+125) / width);
    y_2=Math.floor(100 * (-y_2+125) / width);

    console.log(Math.floor(100 * (-x_1+125) / width))
            
    if(Number.isNaN(x_1)==false){
      // return `top:${x_1}px; left:${y_2}px;`
      return `top:${x_1}%; left:${y_2}%;`
    } 
    else{
      return random_f()
  }  
  }

if(number>41){
  return
}

    if (number > ingredient.length && number<41) {
        for (let i = 0; i < number; i++) {
            if (i > ingredient.length - 1) {
                document.querySelector('.pizza__filling').insertAdjacentHTML("afterbegin",
                `
                <div class="${ingredient_name}" data-position
                style="${random_f()}"></div>
                `);
            }
        }
    }


    if (number < ingredient.length) {
        for (let i = 0; i < ingredient.length - number; i++) {
            ingredient[i].parentNode.removeChild(ingredient[i]);
        }
    }
}




// добавление сыра
   function add_pizza__cheese(occasion){

    const  price = occasion.getAttribute('data-price')
    const  name = occasion.getAttribute('data-name')
    cheese_check.splice(0, 2, price, name);
console.log(cheese_check)

// ++++
remove('block' , 'block' , 'none' , 'none' , 3)
// ++++

      
      if(occasion.checked==true){     
    const cheese_name = occasion.getAttribute('data-cheese');
    document.querySelector('.pizza__cheese').style.background=cheese_name;
      }
  }
// / добавление сыра



// тесто
document.querySelector('[data-doneness]').addEventListener('input', function(){

  const svg='<svg width="16" height="21" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M19.8676 12.6C19.6089 12.2625 19.2939 11.97 19.0014 11.6775C18.2476 11.0025 17.3926 10.5188 16.6726 9.81C14.9964 8.1675 14.6251 5.45625 15.6939 3.375C14.6251 3.63375 13.6914 4.21875 12.8926 4.86C9.97887 7.2 8.83137 11.3288 10.2039 14.8725C10.2489 14.985 10.2939 15.0975 10.2939 15.2438C10.2939 15.4913 10.1251 15.7163 9.90012 15.8063C9.64137 15.9188 9.37137 15.8513 9.15762 15.6713C9.09338 15.6181 9.03992 15.5532 9.00012 15.48C7.72887 13.8713 7.52637 11.565 8.38137 9.72C6.50262 11.25 5.47887 13.8375 5.62512 16.2788C5.69262 16.8413 5.76012 17.4038 5.95137 17.9663C6.10887 18.6413 6.41262 19.3163 6.75012 19.9125C7.96512 21.8588 10.0689 23.2538 12.3301 23.535C14.7376 23.8388 17.3139 23.4 19.1589 21.735C21.2176 19.8675 21.9376 16.875 20.8801 14.31L20.7339 14.0175C20.4976 13.5 19.8676 12.6 19.8676 12.6ZM16.3126 19.6875C15.9976 19.9575 15.4801 20.25 15.0751 20.3625C13.8151 20.8125 12.5551 20.1825 11.8126 19.44C13.1514 19.125 13.9501 18.135 14.1864 17.1338C14.3776 16.2338 14.0176 15.4913 13.8714 14.625C13.7364 13.7925 13.7589 13.0838 14.0626 12.3075C14.2764 12.735 14.5014 13.1625 14.7714 13.5C15.6376 14.625 16.9989 15.12 17.2914 16.65C17.3364 16.8075 17.3589 16.965 17.3589 17.1338C17.3926 18.0563 16.9876 19.0688 16.3126 19.6875Z" fill="#F75500" style="transform: translate(-5px, -3px);"></path></svg>';
  const svg_add=(65<+this.value) ? svg : (36<+this.value) ? svg+svg : svg+svg+svg;
  const number=(33>+this.value) ? -8 : 0;
  const doneness=document.querySelector('.doneness');

    // ++++++
    remove('none' , 'none' , 'none' , 'none' , 1)
    // ++++++

    document.querySelector('.pizza').style.cssText=`
      background: hsl(36deg 100% ${this.value}%);
      border: 15px solid hsl(36deg 100% ${this.value}%);
`;

doneness.innerHTML=svg_add;
doneness.style.right=(+this.value-15+number)+"%";

console.log(this.value)
})
// / тесто


// соус
let sauce=[];

function add_pizza__sauce(occasion){

    const sauce_number = occasion.getAttribute('data-sauce');
        const form=document.querySelector('.pizza__sauce');
        let my_index = sauce.indexOf(sauce_number);
        const copy_sauce = [];
        const name_sauce = occasion.getAttribute('data-name');
        const price = occasion.getAttribute('data-price');

// ++++
remove('block' , 'none' , 'none' , 'none' , 2)
// ++++   

// sauce_check
      
        if(occasion.checked==false){
            if (my_index !== -1) {
                sauce.splice(my_index, 1);

                delete sauce_check[name_sauce];
            }
        }
      else if(occasion.checked==true){
        sauce.unshift(sauce_number);

        Object.assign(sauce_check, {[name_sauce]:Number(price)});
      }
      
      form.style.cssText=`
      background: conic-gradient(red 0deg, ${String(sauce)}); 
      `;
      
      
        if(sauce.length>=0){
      
         const radius=360/sauce.length;
            
      sauce.forEach(function(item, index){
        copy_sauce.push(item.concat(` ${radius}deg ${radius+(index*radius)}deg`))
      })
      
      form.style.cssText=`
      background: conic-gradient(${String(copy_sauce)}); 
      `;
        }


        console.log(sauce_check)

}
// / соус


// разрез
document.querySelector('[step="2"]').addEventListener('input', function (){
    const number = this.value,
          incision = document.querySelectorAll('.incision'),
          gradys=360/number;


          console.log("number "+number)
          if(number==""){
            return
          }
// ++++
remove('block' , 'block' , 'block' , 'block' , 5)
// ++++

if (this.validity.stepMismatch || this.validity.rangeOverflow) {
return
}
       
          document.documentElement.style.setProperty('--rotate', `${gradys}deg`);

                for (let i = incision.length; i < (number/2); i++) {
                          document.querySelector('.pizza__incision').insertAdjacentHTML("afterbegin",
                `
                <div class="incision"></div>
                `);
              }

                for (let i = incision.length; i > (number/2); i--) {
                      incision[0].parentNode.removeChild(incision[0]);
                }

})
// / разрез


document.querySelector('[data-size]').addEventListener('input', function (){
  const value_n=document.querySelector('output[data-size_value]');
  let width=0;
  width = (this.value === '0') ? 300 : (this.value === '50') ? 330 : 350;
  document.documentElement.style.setProperty('--pizza__width', `${width}px`);

  value_n.innerHTML=((this.value === '0') ? '25' : (this.value === '50') ? '30' : '35')+'см';
  console.log(this.value)
})
// / размер
