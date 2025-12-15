import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Enable LayoutAnimation for Android
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// 1. Define Flaticon URLs
const ICONS = {
  backArrow: 'https://cdn-icons-png.flaticon.com/512/271/271220.png',
  chevronDown: 'https://cdn-icons-png.flaticon.com/512/2985/2985150.png',
  chevronRight: 'https://cdn-icons-png.flaticon.com/512/271/271228.png',
};

const FAQ_DATA = [
  {
    id: 1,
    question: 'Do I have to buy the Mobile App?',
    answer: 'No. Our Mobile App is completely free to download and install.',
  },
  {
    id: 2,
    question: 'How do I get the Mobile App for my phone?',
    answer: 'You can download it from the App Store or Google Play Store.',
  },
  {
    id: 3,
    question: 'What features does the Mobile App have?',
    answer: 'It includes booking management, notifications, and profile editing.',
  },
  {
    id: 4,
    question: 'Is the Mobile App secure?',
    answer: 'Yes, we use industry-standard encryption to protect your data.',
  },
  {
    id: 5,
    question: 'How current is the account information?',
    answer: 'Account information is updated in real-time.',
  },
  {
    id: 6,
    question: 'How do I find your offices and payment locations?',
    answer: 'Please visit the "Contact Us" section in the main menu.',
  },
];

const FaqScreen = () => {
  const [expandedId, setExpandedId] = useState(1); // Default first item open

  const toggleExpand = (id) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Image source={{ uri: ICONS.backArrow }} style={styles.headerIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Faq</Text>
          <View style={{ width: 24 }} /> {/* Spacer to center title */}
        </View>

        {/* FAQ List */}
        <ScrollView contentContainerStyle={styles.listContainer}>
          {FAQ_DATA.map((item) => {
            const isOpen = expandedId === item.id;
            
            return (
              <View key={item.id} style={styles.card}>
                <TouchableOpacity
                  style={styles.cardHeader}
                  onPress={() => toggleExpand(item.id)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.questionText}>{item.question}</Text>
                  <Image
                    source={{ uri: isOpen ? ICONS.chevronDown : ICONS.chevronRight }}
                    style={styles.chevronIcon}
                  />
                </TouchableOpacity>
                
                {/* Answer Section (Visible only if open) */}
                {isOpen && (
                  <View style={styles.answerContainer}>
                    <Text style={styles.answerText}>{item.answer}</Text>
                  </View>
                )}
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB', // Light grey background like Figma
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  headerIcon: {
    width: 20,
    height: 20,
    tintColor: '#000', // Ensures the arrow is black
  },
  backButton: {
    padding: 5,
  },
  listContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    // Shadow properties to match design
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3, 
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  questionText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  chevronIcon: {
    width: 16,
    height: 16,
    opacity: 0.6,
  },
  answerContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  answerText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default FaqScreen;