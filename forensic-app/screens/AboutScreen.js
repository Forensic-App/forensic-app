import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function AboutScreen() {
    const [email_address, setEmail] = useState('');
    const [first_name, setFName] = useState('');
    const [last_name, setLName] = useState('');
    const [agency_department_institution, setDept] = useState('');
    //const [title, setTitle] = useState('');

    return (
        <>
        <View style={{height: 300, width: null, overflow: "hidden"}}>
        <ImageBackground
        style={{flex:1, height:null, width: null, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}
        resizeMode = 'cover'
        source={require('../assets/fiuhomebannerdarker.jpg')}
        imageStyle = {{opacity:2.5}}
        >
          <Text style={{textAlign: 'center', fontSize: 20, justifyContent: 'center', color: 'white', fontWeight:'bold', fontSize: '25px'}}>A curated collection of publicly-accessible
            material relating to every discipline of
            the forensic sciences.
          </Text> 
        </ImageBackground>
      </View>
        <LinearGradient colors={['#ffff', '#cfd4da', '#5F7490']}>
            <ScrollView>
                <View style={{ marginTop: 10, marginRight: 2, marginLeft: 2, marginBottom: 70, backgroundColor: "#1a2f4d", borderRadius: 14 }}>
                    <Text style={{ marginTop: 10, fontSize: 16, fontWeight: '700', color: "white", textAlign: 'center' }}> About the Library </Text>
                    <Text style={{ marginTop: 10, fontSize: 15, fontWeight: '400', color: "white", marginLeft: 2, marginRight: 2 }}>
                        Welcome to the Research Forensic Library, a program of the Global Forensic and Justice Center (GFJC) at Florida International University (FIU).{"\n"}
                        {"\n"}
                        This unique library is a curated collection of publicly-accessible articles, reports, drug monographs, controlled substance notifications, historical documents, and other material relating to every discipline of the forensic sciences. New material is added daily, and one of the best ways to track this material is to subscribe to the Library Daily Digest below.{"\n"}
                        {"\n"}
                        If you need assistance finding material, need help with a literature search on a specific topic, or have suggestions about the library, feel free to contact us at forensiclib@fiu.edu.{"\n"}
                        {"\n"}
                        Thank you,{"\n"}
                        {"\n"}
                        Jeff Teitelbaum, MLIS{"\n"}
                        Forensic Research Librarian
                    </Text>
                </View>

                <View style={{ justifyContent: "center", marginLeft: 15 }}>
                    <Text style={[styles.updates]}> Get Daily Updates</Text>
                    <Text style={{ fontWeight: '700', }} >  Email Address * </Text>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="  Enter your email"
                            placeholderTextColor="#003f5c"
                            autoCapitalize="none"
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    <Text style={{ fontWeight: '700', }}>  First Name * </Text>
                    < View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="  Enter your first name"
                            placeholderTextColor="#003f5c"
                            onChangeText={(fName) => setFName(fName)}
                        />
                    </View>
                    <Text style={{ fontWeight: '700', }}>  Last Name * </Text>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="  Enter your last name"
                            placeholderTextColor="#003f5c"
                            onChangeText={(lName) => setLName(lName)}
                        />
                    </View>
                    <Text style={{ fontWeight: '700', }}>  Agency/Department/Institution</Text>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder=" Agency/Department"
                            placeholderTextColor="#003f5c"
                            onChangeText={(dept) => setDept(dept)}
                        />
                    </View>
                    <TouchableOpacity style={styles.subBtn}>
                        <Text style={styles.subText}>Subscribe</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </LinearGradient>
        </>
    );
};

const styles = StyleSheet.create({
    updates: {
        fontWeight: '600',
        fontSize: 18,
        marginBottom: 20,
    },
    SectionStyle: {
        height: 30,
        marginTop: 8,
        margin: 5,
    },
    TextInput: {
        borderRadius: 10,
        borderColor: '#dadae8',
        borderWidth: 1,
        width: 180,
        height: 30,
    },
    subText: {
        width: "80%",
        justifyContent: "center",
        color: "white",
    },
    subBtn: {
        width: 80,
        borderRadius: 10,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#1a2f4d",
        color: "white",
        marginLeft: 5,
        marginBottom: 15
    },
});