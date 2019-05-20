import React from 'react';
import { StyleSheet} from 'react-native';

import { WebView } from 'react-native-webview';


class Editors extends React.Component {

  render() {
    return (
        <WebView
        source={ {uri:'https://codesandbox.io/embed/new?codemirror=1'}}
        style={styles.webview}
        scrollEnabled={true}
        startInLoadingState={true}
        automaticallyAdjustContentInsets={true}
      />
    );
  }
}
const styles = StyleSheet.create({
    webview:{
      padding:5,
      margin:10,
      fontSize:14
    }
});
export default Editors;