import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native';
import { LightComponent } from '../components';
import { SCREEN, CONTAINER, TITLE, TEXT, colors, HEADER_TITLE } from '../theme';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
export class LightsScreen extends Component {

  static navigationOptions = {
    title: 'Philips Hue Lights',
    gesturesEnabled: false,
    headerLeft: null
  }

  componentDidMount(){
    //TODO: Get lights api call by calling action on mobx store
  }

  _keyExtractor = (item, index) => item.id

  render() {
    return (
      <View style={SCREEN}>
        <FlatList 
          data={this.props.store.lightsList}
          renderItem={({item}) => (
            <LightComponent data={item} onChangeState={
              (state) => {
                //TODO: Change light state by calling respective function on a store
              }
            }
              onLightClick={() => this.props.store.setActiveLightBulb(item) }
            />
          )}
          keyExtractor={this._keyExtractor}
        />
      </View>
    )
  }
}
