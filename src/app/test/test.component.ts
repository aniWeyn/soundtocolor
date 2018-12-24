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

import Chart from 'chart.js';
import 'chartjs-color';
import 'chartjs-color-string';

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

  //CHARTJS --------------
  chartA4 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  chartB4 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  chartC5 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  chartD5 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  chartE5 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  chartF5 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  chartG5 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  chartA5 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  //----------------------

  //public participants: AngularFireList<Participant[]>;
  // constructor(afDb: AngularFireDatabase) {
  //afDb.list<Participant>('/participants').valueChanges().subscribe(console.log);
  //}

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    var notes = ["A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5","A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5","A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5","A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5","A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5","A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5"];
    //var notes = ["A4","B4","C5","D5","E5","F5","G5","A5"]
    //var notes = ["A4","A4","A4","A4","A4","A4","A4","A4","A4","A4","A4","A4","A4","A4","A4","A4"]
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
        })
        .on('colorpickerCreate', function (e) {
          e.colorpicker.picker.parents('.card').find('.color-div')
            .css('background-color', "#FFFFFF")
        })
        .on('colorpickerChange', function (e) {
          e.colorpicker.picker.parents('.card').find('.color-div')
            .css('background-color', e.value)
        });
      }
    });
  }

  toneJS(someobject): void {
    var synth = new Tone.Synth().toMaster();
    var noteToPlay = someobject.target.attributes['value'].value;
    synth.triggerAttackRelease(noteToPlay, "8n");
  }

  prepareDataForChart(note, hue)
  {
    if(note == "A4"){
      if(hue < 30)
      this.chartA4[0]++

      if(hue >= 30 && hue < 60)
      this.chartA4[1]++

      if(hue >= 60 && hue < 90)
      this.chartA4[2]++

      if(hue >= 90 && hue < 120)
      this.chartA4[3]++

      if(hue >= 120 && hue < 150)
      this.chartA4[4]++

      if(hue >= 150 && hue < 180)
      this.chartA4[5]++

      if(hue >= 180 && hue < 210)
      this.chartA4[6]++

      if(hue >= 210 && hue < 240)
      this.chartA4[7]++

      if(hue >= 240 && hue < 270)
      this.chartA4[8]++

      if(hue >= 270 && hue < 300)
      this.chartA4[9]++

      if(hue >= 300 && hue < 330)
      this.chartA4[10]++

      if(hue >= 330 && hue <= 360)
      this.chartA4[11]++

      if(hue >= 360)
      this.chartA4[12]++
    }

    if(note == "B4"){
      if(hue < 30)
      this.chartB4[0]++

      if(hue >= 30 && hue < 60)
      this.chartB4[1]++

      if(hue >= 60 && hue < 90)
      this.chartB4[2]++

      if(hue >= 90 && hue < 120)
      this.chartB4[3]++

      if(hue >= 120 && hue < 150)
      this.chartB4[4]++

      if(hue >= 150 && hue < 180)
      this.chartB4[5]++

      if(hue >= 180 && hue < 210)
      this.chartB4[6]++

      if(hue >= 210 && hue < 240)
      this.chartB4[7]++

      if(hue >= 240 && hue < 270)
      this.chartB4[8]++

      if(hue >= 270 && hue < 300)
      this.chartB4[9]++

      if(hue >= 300 && hue < 330)
      this.chartB4[10]++

      if(hue >= 330 && hue <= 360)
      this.chartB4[11]++

      if(hue >= 360)
      this.chartB4[12]++
    }

    if(note == "C5"){
      if(hue < 30)
      this.chartC5[0]++

      if(hue >= 30 && hue < 60)
      this.chartC5[1]++

      if(hue >= 60 && hue < 90)
      this.chartC5[2]++

      if(hue >= 90 && hue < 120)
      this.chartC5[3]++

      if(hue >= 120 && hue < 150)
      this.chartC5[4]++

      if(hue >= 150 && hue < 180)
      this.chartC5[5]++

      if(hue >= 180 && hue < 210)
      this.chartC5[6]++

      if(hue >= 210 && hue < 240)
      this.chartC5[7]++

      if(hue >= 240 && hue < 270)
      this.chartC5[8]++

      if(hue >= 270 && hue < 300)
      this.chartC5[9]++

      if(hue >= 300 && hue < 330)
      this.chartC5[10]++

      if(hue >= 330 && hue <= 360)
      this.chartC5[11]++

      if(hue >= 360)
      this.chartC5[12]++
    }

    if(note == "D5"){
      if(hue < 30)
      this.chartD5[0]++

      if(hue >= 30 && hue < 60)
      this.chartD5[1]++

      if(hue >= 60 && hue < 90)
      this.chartD5[2]++

      if(hue >= 90 && hue < 120)
      this.chartD5[3]++

      if(hue >= 120 && hue < 150)
      this.chartD5[4]++

      if(hue >= 150 && hue < 180)
      this.chartD5[5]++

      if(hue >= 180 && hue < 210)
      this.chartD5[6]++

      if(hue >= 210 && hue < 240)
      this.chartD5[7]++

      if(hue >= 240 && hue < 270)
      this.chartD5[8]++

      if(hue >= 270 && hue < 300)
      this.chartD5[9]++

      if(hue >= 300 && hue < 330)
      this.chartD5[10]++

      if(hue >= 330 && hue <= 360)
      this.chartD5[11]++

      if(hue >= 360)
      this.chartD5[12]++
    }
    if(note == "E5"){
      if(hue < 30)
      this.chartE5[0]++

      if(hue >= 30 && hue < 60)
      this.chartE5[1]++

      if(hue >= 60 && hue < 90)
      this.chartE5[2]++

      if(hue >= 90 && hue < 120)
      this.chartE5[3]++

      if(hue >= 120 && hue < 150)
      this.chartE5[4]++

      if(hue >= 150 && hue < 180)
      this.chartE5[5]++

      if(hue >= 180 && hue < 210)
      this.chartE5[6]++

      if(hue >= 210 && hue < 240)
      this.chartE5[7]++

      if(hue >= 240 && hue < 270)
      this.chartE5[8]++

      if(hue >= 270 && hue < 300)
      this.chartE5[9]++

      if(hue >= 300 && hue < 330)
      this.chartE5[10]++

      if(hue >= 330 && hue <= 360)
      this.chartE5[11]++

      if(hue >= 360)
      this.chartE5[12]++
    }
    if(note == "F5"){
      if(hue < 30)
      this.chartF5[0]++

      if(hue >= 30 && hue < 60)
      this.chartF5[1]++

      if(hue >= 60 && hue < 90)
      this.chartF5[2]++

      if(hue >= 90 && hue < 120)
      this.chartF5[3]++

      if(hue >= 120 && hue < 150)
      this.chartF5[4]++

      if(hue >= 150 && hue < 180)
      this.chartF5[5]++

      if(hue >= 180 && hue < 210)
      this.chartF5[6]++

      if(hue >= 210 && hue < 240)
      this.chartF5[7]++

      if(hue >= 240 && hue < 270)
      this.chartF5[8]++

      if(hue >= 270 && hue < 300)
      this.chartF5[9]++

      if(hue >= 300 && hue < 330)
      this.chartF5[10]++

      if(hue >= 330 && hue <= 360)
      this.chartF5[11]++

      if(hue >= 360)
      this.chartF5[12]++
    }
    if(note == "G5"){
      if(hue < 30)
      this.chartG5[0]++

      if(hue >= 30 && hue < 60)
      this.chartG5[1]++

      if(hue >= 60 && hue < 90)
      this.chartG5[2]++

      if(hue >= 90 && hue < 120)
      this.chartG5[3]++

      if(hue >= 120 && hue < 150)
      this.chartG5[4]++

      if(hue >= 150 && hue < 180)
      this.chartG5[5]++

      if(hue >= 180 && hue < 210)
      this.chartG5[6]++

      if(hue >= 210 && hue < 240)
      this.chartG5[7]++

      if(hue >= 240 && hue < 270)
      this.chartG5[8]++

      if(hue >= 270 && hue < 300)
      this.chartG5[9]++

      if(hue >= 300 && hue < 330)
      this.chartG5[10]++

      if(hue >= 330 && hue <= 360)
      this.chartG5[11]++

      if(hue >= 360)
      this.chartG5[12]++
    }

    if(note == "A5"){
      if(hue < 30)
      this.chartA5[0]++

      if(hue >= 30 && hue < 60)
      this.chartA5[1]++

      if(hue >= 60 && hue < 90)
      this.chartA5[2]++

      if(hue >= 90 && hue < 120)
      this.chartA5[3]++

      if(hue >= 120 && hue < 150)
      this.chartA5[4]++

      if(hue >= 150 && hue < 180)
      this.chartA5[5]++

      if(hue >= 180 && hue < 210)
      this.chartA5[6]++

      if(hue >= 210 && hue < 240)
      this.chartA5[7]++

      if(hue >= 240 && hue < 270)
      this.chartA5[8]++

      if(hue >= 270 && hue < 300)
      this.chartA5[9]++

      if(hue >= 300 && hue < 330)
      this.chartA5[10]++

      if(hue >= 330 && hue <= 360)
      this.chartA5[11]++

      if(hue >= 360)
      this.chartA5[12]++
    }
  }

  createChartJS() {
    var ctx = document.getElementById("myChart")
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['0', '30', '60', '90', '120', '150', '180', '210', '240', '270', '300', '330', '360'],
        datasets: [{
          label: 'A4',
          data: this.chartA4,
          backgroundColor: [
            'rgba(255, 0, 0, 0.6)',
            'rgba(255, 128, 0, 0.6)',
            'rgba(255, 255, 0, 0.6)',
            'rgba(128, 255, 0, 0.6)',
            'rgba(0, 255, 0, 0.6)',
            'rgba(0, 255, 128, 0.6)',
            'rgba(0, 255, 255, 0.6)',
            'rgba(0, 127, 255, 0.6)',
            'rgba(0, 0, 255, 0.6)',
            'rgba(127, 0, 255, 0.6)',
            'rgba(255, 0, 255, 0.6)',
            'rgba(255, 0, 128, 0.6)',
            'rgba(255, 0, 0, 0.6)'
          ],
          borderColor: [
            'rgba(255, 0, 0, 1)',
            'rgba(255, 128, 0, 1)',
            'rgba(255, 255, 0, 1)',
            'rgba(128, 255, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 255, 128, 1)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(127, 0, 255, 1)',
            'rgba(255, 0, 255, 1)',
            'rgba(255, 0, 128, 1)',
            'rgba(255, 0, 0, 1)'
          ],
          borderWidth: 1
        },
        {
          label: 'B4',
          data: this.chartB4,
          backgroundColor: [
            'rgba(255, 0, 0, 0.6)',
            'rgba(255, 128, 0, 0.6)',
            'rgba(255, 255, 0, 0.6)',
            'rgba(128, 255, 0, 0.6)',
            'rgba(0, 255, 0, 0.6)',
            'rgba(0, 255, 128, 0.6)',
            'rgba(0, 255, 255, 0.6)',
            'rgba(0, 127, 255, 0.6)',
            'rgba(0, 0, 255, 0.6)',
            'rgba(127, 0, 255, 0.6)',
            'rgba(255, 0, 255, 0.6)',
            'rgba(255, 0, 128, 0.6)',
            'rgba(255, 0, 0, 0.6)'
          ],
          borderColor: [
            'rgba(255, 0, 0, 1)',
            'rgba(255, 128, 0, 1)',
            'rgba(255, 255, 0, 1)',
            'rgba(128, 255, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 255, 128, 1)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(127, 0, 255, 1)',
            'rgba(255, 0, 255, 1)',
            'rgba(255, 0, 128, 1)',
            'rgba(255, 0, 0, 1)'
          ],
          borderWidth: 1
        },
        {
          label: 'C5',
          data: this.chartC5,
          backgroundColor: [
            'rgba(255, 0, 0, 0.6)',
            'rgba(255, 128, 0, 0.6)',
            'rgba(255, 255, 0, 0.6)',
            'rgba(128, 255, 0, 0.6)',
            'rgba(0, 255, 0, 0.6)',
            'rgba(0, 255, 128, 0.6)',
            'rgba(0, 255, 255, 0.6)',
            'rgba(0, 127, 255, 0.6)',
            'rgba(0, 0, 255, 0.6)',
            'rgba(127, 0, 255, 0.6)',
            'rgba(255, 0, 255, 0.6)',
            'rgba(255, 0, 128, 0.6)',
            'rgba(255, 0, 0, 0.6)'
          ],
          borderColor: [
            'rgba(255, 0, 0, 1)',
            'rgba(255, 128, 0, 1)',
            'rgba(255, 255, 0, 1)',
            'rgba(128, 255, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 255, 128, 1)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(127, 0, 255, 1)',
            'rgba(255, 0, 255, 1)',
            'rgba(255, 0, 128, 1)',
            'rgba(255, 0, 0, 1)'
          ],
          borderWidth: 1
        },
        {
          label: 'D5',
          data: this.chartD5,
          backgroundColor: [
            'rgba(255, 0, 0, 0.6)',
            'rgba(255, 128, 0, 0.6)',
            'rgba(255, 255, 0, 0.6)',
            'rgba(128, 255, 0, 0.6)',
            'rgba(0, 255, 0, 0.6)',
            'rgba(0, 255, 128, 0.6)',
            'rgba(0, 255, 255, 0.6)',
            'rgba(0, 127, 255, 0.6)',
            'rgba(0, 0, 255, 0.6)',
            'rgba(127, 0, 255, 0.6)',
            'rgba(255, 0, 255, 0.6)',
            'rgba(255, 0, 128, 0.6)',
            'rgba(255, 0, 0, 0.6)'
          ],
          borderColor: [
            'rgba(255, 0, 0, 1)',
            'rgba(255, 128, 0, 1)',
            'rgba(255, 255, 0, 1)',
            'rgba(128, 255, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 255, 128, 1)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(127, 0, 255, 1)',
            'rgba(255, 0, 255, 1)',
            'rgba(255, 0, 128, 1)',
            'rgba(255, 0, 0, 1)'
          ],
          borderWidth: 1
        },
        {
          label: 'E5',
          data: this.chartE5,
          backgroundColor: [
            'rgba(255, 0, 0, 0.6)',
            'rgba(255, 128, 0, 0.6)',
            'rgba(255, 255, 0, 0.6)',
            'rgba(128, 255, 0, 0.6)',
            'rgba(0, 255, 0, 0.6)',
            'rgba(0, 255, 128, 0.6)',
            'rgba(0, 255, 255, 0.6)',
            'rgba(0, 127, 255, 0.6)',
            'rgba(0, 0, 255, 0.6)',
            'rgba(127, 0, 255, 0.6)',
            'rgba(255, 0, 255, 0.6)',
            'rgba(255, 0, 128, 0.6)',
            'rgba(255, 0, 0, 0.6)'
          ],
          borderColor: [
            'rgba(255, 0, 0, 1)',
            'rgba(255, 128, 0, 1)',
            'rgba(255, 255, 0, 1)',
            'rgba(128, 255, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 255, 128, 1)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(127, 0, 255, 1)',
            'rgba(255, 0, 255, 1)',
            'rgba(255, 0, 128, 1)',
            'rgba(255, 0, 0, 1)'
          ],
          borderWidth: 1
        },
        {
          label: 'F5',
          data: this.chartF5,
          backgroundColor: [
            'rgba(255, 0, 0, 0.6)',
            'rgba(255, 128, 0, 0.6)',
            'rgba(255, 255, 0, 0.6)',
            'rgba(128, 255, 0, 0.6)',
            'rgba(0, 255, 0, 0.6)',
            'rgba(0, 255, 128, 0.6)',
            'rgba(0, 255, 255, 0.6)',
            'rgba(0, 127, 255, 0.6)',
            'rgba(0, 0, 255, 0.6)',
            'rgba(127, 0, 255, 0.6)',
            'rgba(255, 0, 255, 0.6)',
            'rgba(255, 0, 128, 0.6)',
            'rgba(255, 0, 0, 0.6)'
          ],
          borderColor: [
            'rgba(255, 0, 0, 1)',
            'rgba(255, 128, 0, 1)',
            'rgba(255, 255, 0, 1)',
            'rgba(128, 255, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 255, 128, 1)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(127, 0, 255, 1)',
            'rgba(255, 0, 255, 1)',
            'rgba(255, 0, 128, 1)',
            'rgba(255, 0, 0, 1)'
          ],
          borderWidth: 1
        },
        {
          label: 'G5',
          data: this.chartG5,
          backgroundColor: [
            'rgba(255, 0, 0, 0.6)',
            'rgba(255, 128, 0, 0.6)',
            'rgba(255, 255, 0, 0.6)',
            'rgba(128, 255, 0, 0.6)',
            'rgba(0, 255, 0, 0.6)',
            'rgba(0, 255, 128, 0.6)',
            'rgba(0, 255, 255, 0.6)',
            'rgba(0, 127, 255, 0.6)',
            'rgba(0, 0, 255, 0.6)',
            'rgba(127, 0, 255, 0.6)',
            'rgba(255, 0, 255, 0.6)',
            'rgba(255, 0, 128, 0.6)',
            'rgba(255, 0, 0, 0.6)'
          ],
          borderColor: [
            'rgba(255, 0, 0, 1)',
            'rgba(255, 128, 0, 1)',
            'rgba(255, 255, 0, 1)',
            'rgba(128, 255, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 255, 128, 1)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(127, 0, 255, 1)',
            'rgba(255, 0, 255, 1)',
            'rgba(255, 0, 128, 1)',
            'rgba(255, 0, 0, 1)'
          ],
          borderWidth: 1
        },
        {
          label: 'A5',
          data: this.chartA5,
          backgroundColor: [
            'rgba(255, 0, 0, 0.6)',
            'rgba(255, 128, 0, 0.6)',
            'rgba(255, 255, 0, 0.6)',
            'rgba(128, 255, 0, 0.6)',
            'rgba(0, 255, 0, 0.6)',
            'rgba(0, 255, 128, 0.6)',
            'rgba(0, 255, 255, 0.6)',
            'rgba(0, 127, 255, 0.6)',
            'rgba(0, 0, 255, 0.6)',
            'rgba(127, 0, 255, 0.6)',
            'rgba(255, 0, 255, 0.6)',
            'rgba(255, 0, 128, 0.6)',
            'rgba(255, 0, 0, 0.6)'
          ],
          borderColor: [
            'rgba(255, 0, 0, 1)',
            'rgba(255, 128, 0, 1)',
            'rgba(255, 255, 0, 1)',
            'rgba(128, 255, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 255, 128, 1)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(127, 0, 255, 1)',
            'rgba(255, 0, 255, 1)',
            'rgba(255, 0, 128, 1)',
            'rgba(255, 0, 0, 1)'
          ],
          borderWidth: 1
        }],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  sendToFirebase() {
    var data = this.userReply;

    const obj = this.db.database.ref('/participants');
    obj.push(data);
    
    document.getElementById("btn-fire").style.display = "none";
    document.getElementById("thanks").style.display = "block";
    console.log('Success');
    this.createChartJS();
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
      this.prepareDataForChart("A4", this.userReply.A4[i])
    }
    if (currentNote == "B4") {
      var i = this.userReply.B4.length;
      this.userReply.B4[i] = newAnswer.substring(4, newAnswer.indexOf(","));
      this.prepareDataForChart("B4", this.userReply.B4[i])
    }
    if (currentNote == "C5") {
      var i = this.userReply.C5.length;
      this.userReply.C5[i] = newAnswer.substring(4, newAnswer.indexOf(","));
      this.prepareDataForChart("C5", this.userReply.C5[i])
    }
    if (currentNote == "D5") {
      var i = this.userReply.D5.length;
      this.userReply.D5[i] = newAnswer.substring(4, newAnswer.indexOf(","));
      this.prepareDataForChart("D5", this.userReply.D5[i])
    }
    if (currentNote == "E5") {
      var i = this.userReply.E5.length;
      this.userReply.E5[i] = newAnswer.substring(4, newAnswer.indexOf(","));
      this.prepareDataForChart("E5", this.userReply.E5[i])
    }
    if (currentNote == "F5") {
      var i = this.userReply.F5.length;
      this.userReply.F5[i] = newAnswer.substring(4, newAnswer.indexOf(","));
      this.prepareDataForChart("F5", this.userReply.F5[i])
    }
    if (currentNote == "G5") {
      var i = this.userReply.G5.length;
      this.userReply.G5[i] = newAnswer.substring(4, newAnswer.indexOf(","));
      this.prepareDataForChart("G5", this.userReply.G5[i])
    }
    if (currentNote == "A5") {
      var i = this.userReply.A5.length;
      this.userReply.A5[i] = newAnswer.substring(4, newAnswer.indexOf(","));
      this.prepareDataForChart("A5", this.userReply.A5[i])
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