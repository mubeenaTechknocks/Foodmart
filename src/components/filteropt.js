import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

function Sub_tree({label}) {
  const [colours, setcolours] = useState(false);
  return (
    <View style={styles.text}>
      <Text>{label}</Text>
      <TouchableOpacity
        onPress={() => {
          setcolours(!colours);
        }}>
        <Feather name="square" size={27} style={styles.square} />

        <Entypo
          name="check"
          size={17}
          style={{
            position: 'absolute',
            marginLeft: 4.5,
            marginTop: 5,
            color: colours ? 'black' : 'white',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

function Sub_tree2({label}) {
  const [colours, setcolours] = useState(false);
  return (
    <View style={styles.text}>
      <Image
        resizeMode="contain"
        style={{
          flex: 0.4,
          width: '100%',
          marginLeft: -5,
        }}
        source={label}
      />
      <TouchableOpacity
        onPress={() => {
          setcolours(!colours);
        }}>
        <Feather name="square" size={27} style={styles.square} />

        <Entypo
          name="check"
          size={17}
          style={{
            position: 'absolute',
            marginLeft: 4.5,
            marginTop: 5,
            color: colours ? 'black' : 'white',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default class Filteropt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expandCard: false};
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            this.setState({expandCard: !this.state.expandCard});
          }}>
          <Text
            style={{
              color: this.state.expandCard ? '#709c0b' : 'black',
              fontWeight: this.state.expandCard ? 'bold' : '',
              marginLeft: 20,
              fontSize: 15,
            }}>
            {this.props.list.label}
          </Text>

          <Entypo
            name={
              this.state.expandCard ? 'chevron-small-up' : 'chevron-small-down'
            }
            size={20}
            style={{
              marginRight: 15,
              color: this.state.expandCard ? '#709c0b' : 'black',
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
          }}>
          {this.props.list.label === 'Product Rating' ? (
            <FlatList
              data={this.state.expandCard ? this.props.list.datalist : ''}
              renderItem={({item}) => <Sub_tree2 label={item.title} />}
              keyExtrator={(item) => item.id}
              style={{marginLeft: 25}}
            />
          ) : (
            <FlatList
              data={this.state.expandCard ? this.props.list.datalist : ''}
              renderItem={({item}) => <Sub_tree label={item.title} />}
              keyExtrator={(item) => item.id}
              style={{marginLeft: 25}}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: Dimensions.get('window').width,
    minHeight: 50,
    backgroundColor: 'white',
    borderColor: '#cccccc',
    borderTopWidth: 0.35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    padding: 10,
    justifyContent: 'space-between',
    fontSize: 18,
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'white',
  },
  square: {
    marginRight: 5,
    color: '#90bb5f',
  },
  A: {display: 'flex'},
  B: {display: 'none'},
});
