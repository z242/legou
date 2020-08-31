$(function(){

    // 1.btn注册点击事件
    $('#btn').click(function(){
        // alert(1);

        // 2.获取搜索框输入的值
        value=$('#msg').val();
        // console.log(msg);

        // 刷新就没了
        // $('.search_lists').append(`<li>${msg}</li>`)
    
        // 3.判定用户是否输入值
        if(value==''){
            return false;
        }

        // 4.获取本地数据
        let data=localStorage.getItem('aa');

        // 5.判定本地是否有数据
        if(data){//有数据
            var arr=JSON.parse(data);
            arr.push(value);
            // arr.push(`<li>${value}</li>`);
            var str=JSON.stringify(arr);
            localStorage.setItem('aa',str);
        }else{//无数据
            var arr=[];
            arr.push(value);
            // arr.push(`<li>${value}</li>`);
            var str=JSON.stringify(arr);
            localStorage.setItem('aa',str);
        }

        // 6.输完后清除记录
        $('#msg').val('');
    
        add();

    })

    // 2.遍历 添加数据
    function add(){
        var data=localStorage.getItem('aa');

        var arr=JSON.parse(data);
        if(arr==''){
            return false
        }
        let bb='';
        for (let i = 0; i < arr.length; i++) {
           bb+=`<li>${arr[i]}</li>`;
                // bb+=arr[i];
        //    console.log(arr[1]);
        }

        $('.search_lists').html(bb);
    }
    if(localStorage.getItem('aa')!=null){
        add();
    }

    // 3.删除
    $('#del').click(function(){
        let result=confirm('您确定要删除记录吗?');
        if(result){
            localStorage.removeItem('aa');
            $('.search_lists').html('');
        }
        
    })

})