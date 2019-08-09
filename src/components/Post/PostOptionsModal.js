// import { Text, View, StyleSheet } from "react-native";
// import Modal from "react-native-modal";
// import React, { Component } from "react";
// import {
//   TouchableOpacity,
//   TouchableHighlight,
//   TouchableWithoutFeedback
// } from "react-native-gesture-handler";

// // const PostOptionsModal = ({ isVisible, onBackDroppress }) => (
// //   <Modal
// //     isVisible={isVisible}
// //     onBackDropPress={onBackDroppress}
// //     animationInTiming={500}
// //     animationOutTiming={500}
// //   >
// //     <View style={styles.modalViewContainer}>
// //       <View style={styles.modalSmallContainerView}>
// //         <Text>Photo</Text>
// //         <TouchableOpacity onPress={onBackDroppress}>
// //           <Text>Close</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   </Modal>
// // );

// export default class PostOptionsModal extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isModalVisible: false
//     };
//   }
//   closeModal = () => {
//     this.props.changeModalVisibility(false);
//   };

//   render() {
//     return (
//       <TouchableOpacity
//         activeOpacity={1}
//         disabled={true}
//         style={styles.modalViewContainer}
//       >
//         <View>
//           <Text>Sta god!</Text>
//         </View>
//         <View>
//           <TouchableHighlight onPress={() => this.closeModal()}>
//             <Text> cancel</Text>
//           </TouchableHighlight>
//         </View>
//       </TouchableOpacity>
//     );
//   }
// }

// styles = StyleSheet.create({
//   modalViewContainer: {
//     height: 300,
//     width: 100 + "%",
//     backgroundColor: "white",
//     borderRadius: 10
//   },
//   modalSmallContainerView: {
//     alignItems: "center",
//     justifyContent: "center",
//     height: 290,
//     width: 100 + "%"
//   }
// });
