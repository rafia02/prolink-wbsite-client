import React from 'react'

export const Modal = () => {
    return (
        <div>
            {/* Open the modal using ID.showModal() method */}

            <dialog id="modal" className="modal">

                <form method="dialog" className="modal-box">
                    <div className="modal-action">
                        <button className="btn">X</button>
                    </div>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>

                </form>
            </dialog>
        </div>
    )
}
