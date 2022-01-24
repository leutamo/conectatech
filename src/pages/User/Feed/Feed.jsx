import React from 'react';
import PostCard from '../components/PostCard/PostCard';

const Feed = () => {
  return <>
  <div className='mb-4'>
    <label htmlFor="my-modal-2" className="btn btn-block btn-primary modal-button">Publicar Petición</label> 
    <input type="checkbox" id="my-modal-2" className="modal-toggle" /> 
    <div className="modal">
      <div className="modal-box">
        <p>Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.</p> 
        <div className="modal-action">
          <label htmlFor="my-modal-2" className="btn btn-primary">Accept</label> 
          <label htmlFor="my-modal-2" className="btn">Close</label>
        </div>
      </div>
    </div>
  </div>
  <div className='space-y-4'>
    <h3 className='text-xl font-bold uppercase'>Historial de peticiones:</h3>
    {
      [1,2,3,4,5].map(item => <PostCard key={item} />)
    }
  </div>
</>;
};

export default Feed;
