//
//  event.cpp
//  firstJSONNodeTest
//
//  Created by cafe on 08/12/2014.
//
//

#include "event.h"

Event::Event(string _imageURL, string _title, string _text) :
    title(_title),
    text(_text)
{
    bool imageLoaded = image.load(_imageURL);
    if(imageLoaded)
    {
    }
    textCol = ofColor(255);
}

Event::Event(ofImage _image, string _title, string _text) :
    image(_image),
    title(_title),
    text(_text)
{
    textCol = ofColor(255);
}

void Event::display(int x, int y)
{
    image.draw(x, y, ofGetWidth(), ofGetHeight());
    ofSetColor(textCol);
    ofDrawBitmapString(title, x + 10, y + 10);
    ofDrawBitmapString(text, x + 10, y + 50);
}
