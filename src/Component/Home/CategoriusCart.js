import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
const CategoriusCart = () => {
  return (
    <div className='categorious-main' style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1588756681780-9d5859fc2ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")`
    }}>
      <div className="categorious-overflow ">
        <div className=''>
          <div className="row pb-5 ">
            <div className="col-md-3 col-lg-3 ">
              <div className="card cate-card">
                <p className='cate-card-title'>SPORTBIKE</p>
                <p className='text-end cate-expore '> <FontAwesomeIcon className="cate-icon" icon={faCaretLeft} /> EXPOR TYPE</p>
                <img className='cate-card-img' src="https://cdn-icons-png.flaticon.com/512/520/520355.png" alt="" />
              </div>
            </div>
            <div className="col-md-3 col-lg-3">
              <div className="card cate-card">
                <p className='cate-card-title'>Chopper</p>
                <p className='text-end cate-expore'> <FontAwesomeIcon className="cate-icon" icon={faCaretLeft} /> EXPOR TYPE</p>
                <img className='cate-card-img ' src="https://cdn-icons-png.flaticon.com/128/1165/1165940.png" alt="" />
              </div>
            </div>
            <div className="col-md-3 col-lg-3">
              <div className="card cate-card">
                <p className='cate-card-title'>CRuiser</p>
                <p className='text-end cate-expore '> <FontAwesomeIcon className="cate-icon" icon={faCaretLeft} /> EXPOR TYPE</p>
                <img className='cate-card-img' src="https://cdn-icons-png.flaticon.com/128/4539/4539640.png" alt="" />
              </div>
            </div>
            <div className="col-md-3 col-lg-3">
              <div className="card cate-card">
                <p className='cate-card-title'>Tourning-Bike</p>
                <p className='text-end  cate-expore'> <FontAwesomeIcon className="cate-icon" icon={faCaretLeft} /> EXPOR TYPE</p>
                <img className='cate-card-img' src="https://www.svgrepo.com/show/42788/motorcycle-of-big-size-black-silhouette.svg" alt="" />
              </div>
            </div>
           
          </div>
        </div>
      </div>

    </div>
  );
};

export default CategoriusCart;