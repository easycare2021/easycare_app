import React, { useState } from 'react';
import { Title} from '../styles';
import Base from '../Base';
import BaseTextInputMasked from '../../../components/BaseTextInputMasked';
import { useDispatch } from 'react-redux';
import { alertError } from '../../../utils/alert';
import * as types from '../../../reducers/types';
import { cpf } from 'cpf-cnpj-validator';
import CaregiverService from '../../../services/CaregiverService';

const Document = ({ navigation }) => {

    const [document, setDocument] = useState('');
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const caregiverService = new CaregiverService();

    const nextStep = async () => {

        if (!document || !cpf.isValid(document)) {

            alertError('Insira um CPF válido!');
            return;
        }

        setLoading(true);
        await caregiverService.documentAlreadyExists(document).then(response => {

            if (!response.exists) {

                setLoading(false);
                dispatch({
                    type: types.ADD_CAREGIVER,
                    payload: {
                        document,
                    },
                });

                navigation.navigate('Phone');
            } else {
                alertError('Este CPF já foi cadastrado.');
                setLoading(false);
                return;
            }
        }).catch(err => {

            alertError('Este CPF já está sendo utilizado.');
            setLoading(false);
            return err;
        });
    };

    return (
        <Base nextStep={nextStep} loading={loading}>
            <Title>Agora nos informe seu CPF</Title>
            <BaseTextInputMasked
                mask={'[000].[000].[000]-[00]'}
                keyboardType="numeric"
                onChangeText={text => setDocument(text)}
            />
        </Base>
    );
};

export default Document;
