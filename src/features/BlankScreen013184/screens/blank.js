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

  state = { TextInput_3: "", TextInput_4: "", Switch_5: true }

  render = () => (
    <View>
      <Text>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_3}
        onChangeText={nextValue => this.setState({ TextInput_3: nextValue })}
      />
      <TextInput
        placeholder="Number Input Placeholder"
        value={this.state.TextInput_4}
        onChangeText={nextValue => this.setState({ TextInput_4: nextValue })}
      />
      <Switch
        value={this.state.Switch_5}
        onValueChange={nextChecked => this.setState({ Switch_5: nextChecked })}
      />
      <Image
        source={{
          uri:
            "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/8_GnCxCAI.jpg"
        }}
        style={styles.Image_6}
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
  Switch_5: {},
  View_1: {},
  Text_2: {},
  TextInput_3: {},
  TextInput_4: {},
  Switch_5: {},
  Image_6: { width: 100 },
  View_1: {},
  Text_2: {},
  TextInput_3: {},
  TextInput_4: {},
  Switch_5: {},
  Image_6: { width: 100, alignSelf: "center" }
})
