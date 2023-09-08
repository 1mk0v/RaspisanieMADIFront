const Button = {
  props:["svg","ico"],
  data(){
    return
  },
      template:
        `
        <div style="
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;">
      <div v-html='svg' class='my-svg'></div>
      <div style="display:table; position: absolute; width:10.8%; max-heigth:150px">
        <div v-html='ico' style='font-size:2.6vw; justify-content:center; display:flex; flex-direction:column; align-items: center;'></div>
      </div>
      </div>
        `,
};

export {Button}