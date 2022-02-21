import React, {FC} from 'react';
import Modal from "antd/es/modal/Modal";
import {useLazyQuery} from "react-apollo";
import {GET_USER} from "../../../../GRAPHQL/queries";


interface AllPhotosProps {
    isVisibleAllPhotos: boolean,
    setIsVisibleAllPhotos: any,
    allImages: any,
}


const AllPhotos: FC<AllPhotosProps> = ({isVisibleAllPhotos, setIsVisibleAllPhotos, allImages}) => {
    // const [getPhoto, { loading, error, data }] = useLazyQuery(GET_USER, {variables: {id: currentId}});
    return (
        <Modal
            visible={isVisibleAllPhotos}
            footer={null}
            onCancel={() => setIsVisibleAllPhotos(false)}
        >
            {allImages.images.map(({path}: any, index: number) =>
                <img key={index}  style={{width: '100px'}} src={path} alt=""/>
            )}
        </Modal>
    );
};

export default AllPhotos;