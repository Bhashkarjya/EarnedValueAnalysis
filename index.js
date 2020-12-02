function calc()
        {
            // event.preventDefault();
            let bcws=parseInt(document.getElementById('bcws').value);            
            let bcwp=parseInt(document.getElementById('bcwp').value);            
            let acwp=parseInt(document.getElementById('acwp').value);            
            let eac=parseInt(document.getElementById('eac').value);
            let bac=parseInt(document.getElementById('bac').value);

            if(bcwp<0 || bcws<0 || acwp<0 || eac<0 || bac<0)
            {
                alert("Sorry!! the given inputs are invalid.The input cannot be negative.");
                return;
            }
            if(bac < bcws) 
            {
                alert("Sorry!! the given inputs are invalid.The work for whole task cannot be than the schedeuled." );
                return;
            }
            if(bcwp === 0 || acwp === 0)
            {
                alert("Sorry!! the given inputs are invalid.The work performed is 0 means the work is not started yet.");
                return;
            }      
            if(bcws === 0)
            {
                alert("Sorry!! the given inputs are invalid.The work scheduled cost cannot be 0 for a project.");
                return;
            }
            if(bac === 0 || eac===0)
            {
                alert("Sorry!! the given inputs are invalid.The estimated or expected budget at completion cannot be 0.");
                return;
            }
            let cv=bcwp-acwp;
            let sv=bcwp-bcws;

            document.getElementById('cv').value=cv;
            let n2=(cv*100)/bcwp;
            document.getElementById('cv_in_percentage').value=n2.toFixed(2);

            if(cv < 0)
            {
                document.getElementById("cv_status").value="Cost overrun";
            }
            else if( cv > 0)
            {
                document.getElementById('cv_status').value="Cost underrun";
            }
            else if( cv == 0)
            {
                document.getElementById('cv_status').value="Costing expectedly";
            }

            document.getElementById('sv').value=sv;
            let n5=(sv*100)/bcws;
            document.getElementById('sv_in_percentage').value=n5.toFixed(2);
            
            if( sv < 0)
            {   
                document.getElementById('sv_status').value="Behind schedule";
            }
            else if( sv > 0)
            {
                document.getElementById('sv_status').value="Ahead schedule";
            }
            else if( sv == 0)
            {
                document.getElementById('sv_status').value="Running expectedly.";
            }
            let n7=(bcwp/acwp);
            let n8=(bcwp/bcws);
            let n9=bac-eac;
            document.getElementById('cpi').value=n7.toFixed(2);
            document.getElementById('spi').value=n8.toFixed(2);
            document.getElementById('vac').value=n9.toFixed(2);
        }