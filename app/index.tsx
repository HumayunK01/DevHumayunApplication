import { ThemedView } from '@/components/themed-view';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

export default function HomeScreen() {
    return (
        <ThemedView style={styles.container}>
            {/* Ensure the status bar is visible */}
            <StatusBar style="auto" />
            <SafeAreaView style={styles.container}>
                <WebView
                    source={{ uri: 'https://devhumayun.me' }}
                    style={styles.webview}
                    startInLoadingState={true}
                />
            </SafeAreaView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webview: {
        flex: 1,
    },
});
