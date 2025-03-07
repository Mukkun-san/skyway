import React from 'react'
import { FaClock, FaArrowRight } from 'react-icons/fa'
import searchStyle from './styles.css'

let CustomCard = ({ pkgs }) => {

    let pkgCards = pkgs.map((pkg, i) => {
        return (pkg ? (
            <div className='row py-3' key={"key-" + i}>
                <div className='col-md-5'>
                    <img
                        style={{ width: '100%' }}
                        src={pkg.imageUrl}
                        alt=''
                    />
                </div>
                <div className='col-md-7'>
                    <div className={searchStyle.content}>
                        <h4>{pkg.packageName}</h4>
                        <div className={searchStyle.duration}>
                            <FaClock /> {pkg.duration}
                        </div>
                        <div className={searchStyle.places}>{pkg.place}</div>
                        <div style={{ float: 'left' }}>
                            Starts at: <b>₹ {pkg.priceStartsAt} </b>
                        </div>
                    </div>
                    <a href={"/packages/" + pkg.pkgcode}>
                        <button
                            style={{
                                float: 'right',
                                position: 'relative',
                                right: '10px',
                                top: '20px',
                            }}
                            className={'btn btn-primary'}
                        >
                            View Detail <FaArrowRight />
                        </button></a>
                </div>
            </div>
        ) : "")
    })

    return (
        <div className={searchStyle.customCard}>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    padding: '10px',
                    justifyContent: 'space-between',
                }}
            >
                <div
                    style={{
                        fontSize: '20pt',
                    }}
                >
                    Packages found ({pkgs.length})
                                </div>
                <div
                    style={{
                        border: '1px solid #aaa',
                        padding: '5px',
                    }}
                >
                    Filter
                                </div>
            </div>

            {pkgs && pkgs.length ?
                <div>{pkgCards}</div>
                : <h3 className='text-info font-weight-normal'>No packages found here yet.</h3>}
        </div>
    )
}

export default CustomCard