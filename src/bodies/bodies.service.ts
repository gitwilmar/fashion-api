import { Model } from 'mongoose';
import { Injectable, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Body,BodyDocument } from 'src/schemas/body.schema';
import { GetBodyByDate } from './dto/get-body-by-date.dto';
const csvtojson = require('csvtojson');
const { promises: Fs } = require('fs');



@Injectable()
export class BodiesService {
  constructor(@InjectModel(Body.name) private bodyModel: Model<BodyDocument>) {}

  async readCsv() {
    const fileName = "fashion-data.csv";
    
    try {
      await Fs.access(fileName);
    } catch {
      return "No CSV found!";
    }

    var arrayToInsert = [];

    await csvtojson().fromFile(fileName).then(source => {
      for (var i = 0; i < source.length; i++) {
          var oneRow = {
              userName: source[i]["USER_NAME"],
              age: source[i]["AGE"],
              height: source[i]["HEIGHT"],
              gender: source[i]["GENDER"],
              sales: source[i]["SALES"],
              lastPurchaseDate: source[i]['LAST_PURCHASE_DATE']
          };
          arrayToInsert.push(oneRow);
      }
      this.bodyModel.insertMany(arrayToInsert);
    });

    return "Data received from CSV!";
  }

  getBodyBydate(filterDto: GetBodyByDate) {
    const dateFrom = filterDto.dateFrom;
    const dateTo = filterDto.dateTo;
    return this.bodyModel.find({
      lastPurchaseDate: {
        $gte: new Date(dateFrom),
        $lte: new Date(dateTo)
    }},{_id:0,__v:0});

  }

  findAll() {
    return this.bodyModel.find({},{_id:0,__v:0});
  }

}

  

