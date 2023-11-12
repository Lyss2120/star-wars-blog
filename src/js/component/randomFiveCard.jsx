import React from 'react'

const RandomFiveCard = (name, index) => {
    return (
        <div className="card bg-dark bg-clear" style={{ maxWidth: '540px' }}>
            <div className="row g-0 ">
                <div className="col-md-4">
                    <img src='https://lumiere-a.akamaihd.net/v1/images/the-bad-batch-episode-guides-s2-midseason-featured-a_34060fda.jpeg?region=0,0,1536,864&width=320' className="img-fluid rounded-start" alt='img' />
                </div>
                <div className="col-md-8 test">
                    <div className="card-body">
                        <h5 className="card-title">{name} {index} map(2-4)</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RandomFiveCard
