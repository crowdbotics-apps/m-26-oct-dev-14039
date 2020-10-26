import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    TextInput_3: "",
    TextInput_4: "",
    DateTimePicker_5: new Date(""),
    Switch_6: true,
    DateTimePicker_8: new Date("")
  }

  render = () => (
    <View>
      <Text>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_3}
        onChangeText={nextValue => this.setState({ TextInput_3: nextValue })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_4}
        onChangeText={nextValue => this.setState({ TextInput_4: nextValue })}
      />
      <DateTimePicker
        date={this.state.DateTimePicker_5}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_5: selectedDate })
        }
      />
      <Switch
        value={this.state.Switch_6}
        onValueChange={nextChecked => this.setState({ Switch_6: nextChecked })}
      />
      <Slider value={50} minimumValue={0} maximumValue={100} />
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_8}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_8: selectedDate })
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Text_2: {},
  TextInput_3: {},
  TextInput_4: {},
  DateTimePicker_5: {},
  Switch_6: {},
  Slider_7: {},
  View_1: {},
  Text_2: {},
  TextInput_3: {},
  TextInput_4: {},
  DateTimePicker_5: {},
  Switch_6: {},
  Slider_7: {},
  DateTimePicker_8: {}
})
