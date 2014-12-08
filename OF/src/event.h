//
//  event.h
//  firstJSONNodeTest
//
//  Created by cafe on 08/12/2014.
//
//

#ifndef __firstJSONNodeTest__event__
#define __firstJSONNodeTest__event__

#include "ofMain.h"

class Event {
public:
    void display(int x, int y);
    Event(string _imageURL, string _title, string _text);
    Event(ofImage _image, string _title, string _text);

private:
    ofImage image;
    string title;
    string text;
    ofColor textCol;
};

#endif /* defined(__firstJSONNodeTest__event__) */
