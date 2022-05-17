 import 'react-native';
 import React from 'react';
 import Card from '../Card';
 
 // Note: test renderer must be required after react-native.
 import renderer from 'react-test-renderer';
 
 it('renders correctly', () => {
   renderer.create(<Card title={''} image_url={''} />);
 });
 