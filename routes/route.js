exports.home=function(req,res){
  res.render('home',{title:'iLoveMyCity',
                    headline:'NAMASTE!’ INCREDIBLE INDIA!'
                    });
                  }


exports.city=function(req,res){
    var cityName=req.params.city;
    var title,heading;
    var imageCount=3;
 
    if(cityName==='hyderabad'){
       title="hyderabad";
       heading="hyderabad: Love of Biriyani";
    }
    else if(cityName==='kolkata'){
       title="kolkata";
       heading="kolkata: Sea Food and Football";
    }
    else if(cityName==='mumbai'){
       title="mumbai";
       heading="mumbai: Sparkling, Still, Food, Gorgeous";
    }
    else if(cityName==='delhi'){
       title="delhi";
       heading="delhi: Heart of India";
       imageCount=4;
    }

    res.render('city',{
        title:title,
        headline:heading,
        city:cityName,
        numberOfImages:imageCount});
  }
