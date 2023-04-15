/*eslint-disable */

const nullCheck = (data={}) => {

    if(data.content.length === 0 || data.answer1.length === 0 || 
        data.answer2.length === 0 ){
        alert('데이터를 입력해주세요🤔');
    }

}

const nullCheckDatas = (datas=[]) => {
    let x= true;
    console.log(datas);
    console.log(x);
    datas.map((data,i)=>{

        if( x && (data.content.length === 0 || data.answer1.length === 0 || 
            data.answer2.length === 0 )
            ){
            alert('데이터를 입력해주세요🤔');
            x = false;
        }

    })
    
}

export { nullCheck, nullCheckDatas }