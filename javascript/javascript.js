function demo(e){

    let demo = e.className
    // console.log(demo)

    if( demo =="show winner"){
        e.classList.add("green")

    }else{
       e.classList.add("showbg")

    }
    
}