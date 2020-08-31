$(function(){
    // 实现全选
    $('#allCheck').click(function(){
        // alert(1);
        if($('#allCheck').prop('checked')==true){
            $(this).closest('body').find('.choose input').prop('checked',true);
        }else{
            $(this).closest('body').find('.choose input').prop('checked',false);
      }
      allCons();

    })
    
    // 实现反选
    $('.choic input').change(function(){
        //遍历所有choose里面input,当所有被选中,实现全选

        //定义标杆
        let flag=true;
        $('.choic input').each(function(){
            let stadus=$(this).prop('checked');
            // console.log(stadus);

            // if(stadus==false){
            //     $('#allCheck').prop('checked',false);
            // }else{
            //     $('#allCheck').prop('checked',true);
            // }

            if(!stadus){
                flag=false;
                return;
            }
        })
        $('#allCheck').prop('checked',flag);
        allCons();

        //判定长度
        // var a=$('.choic input').length;
        // var b=$('.choic input:checked').length;
        // if(a==b){
        //     $('#allCheck').prop('checked',true);
        // }else{
        //     $('#allCheck').prop('checked',false);
        // }
    })

    // 点击+数量+1
    
    $('.add').click(function(){
        // alert(1);
        let num=$(this).siblings('.num input').val();
        num++;
        // $(this).siblings('input').val(num);
        $(this).siblings('input').val(num);
        
        cons(this,num);
        allCons();
    })

    
    // 点击-数量-1
    $('.rec').click(function(){
        // alert(1);
        let num=$(this).siblings('.num input').val();
        num--;
        if(num>=1){//判定大于等于1时数量为num
            $(this).siblings('input').val(num);
        }
        cons(this,num);
        allCons();
    })

    // 小计
    //获取当前商品单价,数量,总价
    function cons(obj,num){
        var selfPrice=$(obj).closest('.price').find('.sp').html();
        var somePrice=(selfPrice*num);

        console.log(selfPrice,num,somePrice);
    }

    //总计
    function allCons(){
        let allCount=0;
        let allPrice=0;
        $('.choic input:checked').each(function(){

            //总数量
            let aa=parseInt($(this).closest('.self').find('.num input').val());
            allCount+=aa;

            //总价
            let bb=parseInt($(this).closest('.self').find('.sp').text());
            let cc=parseInt($(this).closest('.self').find('.num input').val());
            allPrice+=bb*cc;
        })

        allPrice=allPrice.toFixed(2);
        $('.allNum').text(allCount);
        $('.all span').text(allPrice);

    }
        



            

        
        



})