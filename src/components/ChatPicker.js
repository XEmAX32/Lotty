import React from 'react';
import { 
    Picker,
    Item
} from 'native-base';

export default function ChatPicker({options,item,onValueChange,selectedValue}) {
    return (
        <Item 
            Picker
            style={{width:100, alignSelf: item.relation == 1 ? 'flex-end' : 'flex-start'}}
        >
            <Picker 
                selectedValue={selectedValue}
                mode="dropdown"
                placeholder="Select your SIM"
                onValueChange={(selected) => onValueChange(selected,item)}
            >
                {options.map((option,i) => <Picker.Item key={i} label={option.label} value={option.value}/>)}
            </Picker>
        </Item>
    )
} 