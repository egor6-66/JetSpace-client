import React, { FC } from 'react';
import Modal from "antd/es/modal/Modal";


interface AllPhotosProps {
    allUserImg: any[],
    isVisibleAllPhotos: boolean,
    setIsVisibleAllPhotos: any,
}

const AllPhotos: FC<AllPhotosProps> = ({allUserImg, isVisibleAllPhotos, setIsVisibleAllPhotos}) => {

    return (
        <Modal
            visible={isVisibleAllPhotos}
            footer={null}
            onCancel={() => setIsVisibleAllPhotos(false)}
        >
            {allUserImg && allUserImg.map(({id, path}: any) =>
                <img key={id}  style={{width: '100px'}} src={path} alt=""/>
            )}
        </Modal>
    );
};

export default AllPhotos;
