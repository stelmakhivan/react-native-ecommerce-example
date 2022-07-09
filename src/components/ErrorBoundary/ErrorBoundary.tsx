import {Component, ReactNode} from 'react';
import {View} from 'react-native';

import {Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ERROR_TITLE} from './errorBoundary.settings';
import styles from './errorBoundary.styles';
import {ErrorBoundaryState} from './errorBoundary.types';

class ErrorBoundary extends Component<
  {children?: ReactNode},
  ErrorBoundaryState
> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch() {
    //TODO: log to crashlytics
  }

  render() {
    const {hasError} = this.state;
    const {children} = this.props;

    if (hasError) {
      return (
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.container}>
            <Text style={styles.emoji}>😢</Text>
            <Text style={styles.title}>{ERROR_TITLE}</Text>
          </View>
        </SafeAreaView>
      );
    }

    return children;
  }
}

export {ErrorBoundary};
