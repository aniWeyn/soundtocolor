import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Input } from '@angular/core';
import $ from 'jquery'
declare var $: $
import 'bootstrap-colorpicker';
import 'tone';
import './research.ts'
import { ResearchQuestion } from './research';
import { NgContentAst } from '@angular/compiler';

class Participant {
  constructor(public title) { }
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  h2Style: boolean = false;
  name: string;
  questions: [];
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  title = 'Tour of Heroes';
  noteToPlay = "C4";
  userReply = {
    "A4": [],
    "B4": [],
    "C5": [],
    "D5": [],
    "E5": [],
    "F5": [],
    "G5": [],
    "A5": []
  }

  //public participants: AngularFireList<Participant[]>;
  // constructor(afDb: AngularFireDatabase) {
  //afDb.list<Participant>('/participants').valueChanges().subscribe(console.log);
  //}

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    var notes = ["A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5"];
    //var notes = ["A4","B4","C5","D5","E5","F5","G5","A5"]
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
    var notesShuffled = shuffle(notes);
    this.questions = notesShuffled;

    $(function () {

      for (var i = 0; i < notesShuffled.length; i++) {
        $('#cp' + i).colorpicker({
          inline: true,
          container: true,
          useAlpha: false, //color will be always opaque
          format: 'hsl',
          horizontal: true,
          customClass: 'colorpicker-2x',
          sliders: {
            saturation: {
              maxLeft: 200,
              maxTop: 200
            },
            hue: {
              maxTop: 200
            }
          },
          template: '<div class="colorpicker">' +
            '<div class="colorpicker-hue"><i class="colorpicker-guide"></i></div>' +
            '</div>'
        }).on('colorpickerChange colorpickerCreate', function (e) {
          e.colorpicker.picker.parents('.card').find('.color-div')
            .css('background-color', e.value)
        });
      }
    });
  }



  firstClick() {
    console.log('clicked');
    this.h2Style = true;
  }

  toneJS(someobject): void {
    var synth = new Tone.Synth().toMaster();
    var noteToPlay = someobject.target.attributes['value'].value;
    synth.triggerAttackRelease(noteToPlay, "8n");
  }

  sendToFirebase() {
    var data = this.userReply;

    const obj = this.db.database.ref('/participants');
    obj.push(data);
    document.getElementById("thanks").style.display = "block";
    console.log('Success');
  }

  addAnswer(newAnswer: string, object) {
    var currentNote = object.target.attributes['value'].value;
    var index = object.target.attributes['name'].value;
    console.log(currentNote, index)
    this.disableButton(currentNote, index)
    var stop = false;
    if (currentNote == "A4") {
      var i = this.userReply.A4.length;
      this.userReply.A4[i] = newAnswer.substring(4, newAnswer.indexOf(","));
    }
    if (currentNote == "B4") {
      var i = this.userReply.B4.length;
      this.userReply.B4[i] = newAnswer.substring(4, newAnswer.indexOf(","));
    }
    if (currentNote == "C5") {
      var i = this.userReply.C5.length;
      this.userReply.C5[i] = newAnswer.substring(4, newAnswer.indexOf(","));
    }
    if (currentNote == "D5") {
      var i = this.userReply.D5.length;
      this.userReply.D5[i] = newAnswer.substring(4, newAnswer.indexOf(","));
    }
    if (currentNote == "E5") {
      var i = this.userReply.E5.length;
      this.userReply.E5[i] = newAnswer.substring(4, newAnswer.indexOf(","));
    }
    if (currentNote == "F5") {
      var i = this.userReply.F5.length;
      this.userReply.F5[i] = newAnswer.substring(4, newAnswer.indexOf(","));
    }
    if (currentNote == "G5") {
      var i = this.userReply.G5.length;
      this.userReply.G5[i] = newAnswer.substring(4, newAnswer.indexOf(","));
    }
    if (currentNote == "A5") {
      var i = this.userReply.A5.length;
      this.userReply.A5[i] = newAnswer.substring(4, newAnswer.indexOf(","));
    }
  }

  disableButton(value, index){
    var buttonClassName = "btn-"+value+"-"+index;
    console.log(buttonClassName)
    document.getElementById(buttonClassName).style.visibility = 'hidden';

    var cardBodyPicker = "card-body-picker-"+value+"-"+index;
    document.getElementById(cardBodyPicker).style.display = "none";;

    var playSound = "playSound-"+value+"-"+index;
    document.getElementById(playSound).style.display = "none";

    var sliderTxt = "sliderTxt-"+value+"-"+index;
    document.getElementById(sliderTxt).style.display = "none";

    var pName = "p-"+value+"-"+index;
    document.getElementById(pName).style.display = "block";
    document.getElementById(pName).style.visibility = 'visible';
  }
}