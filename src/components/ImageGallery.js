import React,{useState} from 'react';
import MenuItems from '../components/MenuItems';
import "../Style/Gallery.css";

function ImageGallery() {

  const [items,setitems]=useState(MenuItems);
    const filterFun=(curclikitem)=>{
      const updateditem=MenuItems.filter((curElem)=>{
                                            return(curElem.filteredCategory===curclikitem)
      })
      return(
       setitems(updateditem)
      )
    }












    return (
      <div className="container">
        <h1 className="img-heading">Menu Partner</h1>
        <hr />
        {/* division for buttons  */}

        <div className="row ">
          <div className="col-12 col-lg-3 col-sm-3 col-md-3 col-xl-3 buttons">
            <button type="button" className="btn btn-warning " onClick={()=>filterFun("DesiFood")}>
              Desi Food
            </button>
          </div>
          <div className="col-12 col-lg-3 col-sm-3 col-md-3 col-xl-3 buttons">
            <button type="button" className="btn btn-warning " onClick={()=>filterFun("FishFood")}>
              Fish Food
            </button>
          </div>
          <div className="col-12 col-lg-3 col-sm-3 col-md-3 col-xl-3 buttons">
            <button type="button" className="btn btn-warning "onClick={()=>filterFun("BarBQ")}>
              Bar BQ
            </button>
          </div>
          <div className="col-12 col-lg-3 col-sm-3 col-md-3 col-xl-3 buttons">
            <button type="button" className="btn btn-warning " onClick={()=>filterFun("SoftDrink")}>
              Soft Drink
            </button>
          </div>
        </div>
      
      {/* images gallery */}
      
      <div className='container'>
          <div className='row'>

             {

              items.map((currentelement)=>{
                  const{id,image,title,text,price}=currentelement;
                  return (
                    <>
                      <div className="card  mt-5 " style={{ width: "50%" }}>
                        <img src={image} className="card-img-top img-fluid " alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{title}</h5>
                          <p className="card-text">
                            {text}
                          </p>
                          <div>Price:{price}</div>
                          <a href="#" className="btn btn-primary">
                            Go somewhere
                          </a>
                        </div>
                      </div>
                    </>
                  );
              })








             }


             

          </div>

     </div>
      
      
      
      
      </div>
    );
}

export default ImageGallery
