import React, { Component } from "react";
import { View, Text, TouchableOpacity, DatePickerAndroid } from "react-native";
import styles from "./styles";
import { CalendarSVG } from "../assets";
import dateFormat from "../helpers/dateFormat";

class DatePicker extends Component {
    handleDatePicker = async() => {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
              // Use `new Date()` for current date.
              // May 25 2020. Month 0 is January.
              date: new Date(),
            });
            if (action !== DatePickerAndroid.dismissedAction) {
              // Selected year, month (0-11), day
                this.props.onValueChange(new Date(year, month, day))
            }
          } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
          }
    }
    render() {
        return (
            <View style={styles.datePickerContainer}>
                <Text style={[styles.datePickerText, !this.props.value ? styles.datePickerPlaceholderText : null]}>{this.props.value ? dateFormat(this.props.value, "d/m/Y") : " dd / mm / yy"}</Text>
                <TouchableOpacity onPress={this.handleDatePicker}>
                    <CalendarSVG height={24} width={24} />
                </TouchableOpacity>
            </View>
        );
    }
}
export default DatePicker;