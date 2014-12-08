#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    
    bool parsingSuccessful = json.open(url);
    timer = 0;
    
    if (parsingSuccessful)
    {
        ofLogNotice("ofApp::setup") << json.getRawString(true);
        for(int i = 0; i < json["events"].size(); i++)
        {
            ofImage tmpImage;
            bool imageLoaded = tmpImage.load(json["events"][i]["imageURL"].asString());
            if(imageLoaded)
            {
                Event tmpEvent(tmpImage, json["events"][i]["title"].asString(), json["events"][i]["informationText"].asString());
                events.push_back(tmpEvent);
            }
        }
    }
    else
    {
        ofLogNotice("ofApp::setup") << "Failed to parse JSON.";
    }
}

//--------------------------------------------------------------
void ofApp::update(){
    ofxJSONElement tempjson;
    bool parsingSuccessful = tempjson.open(url);
    
    if (parsingSuccessful)
    {
        if(json.compare(tempjson) < 0)
        {
            json = tempjson;
        }
    }
    else
    {
        ofLogNotice("ofApp::update") << "Failed to parse JSON.";
    }
}

//--------------------------------------------------------------
void ofApp::draw()
{
    timer = (int(timer)%events.size() == events.size()) ? 0 : timer + 0.1;
    ofBackground(0);
    myImage.draw(0, 0);
    ofSetColor(255);
    std::string rawString = json.getRawString(true);
    events[int(timer)%events.size()].display(0, 0);
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
