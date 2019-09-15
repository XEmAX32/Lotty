import React from 'react';
import DatePicker from 'react-native-datepicker'

export default function ChatDate({item,date,onCloseModal,disabled,onDateChange}) {

    return (
        <DatePicker 
            style={{alignSelf: item.relation == 1 ? 'flex-end' : 'flex-start'}}
            confirmBtnText="confirm"
            cancelBtnText="cancel"
            date={date}
            onDateChange={(date) => onDateChange(date,item)}
            onCloseModal={() => onCloseModal(item)}
            disabled={disabled}
            />
    )
} 