<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function add(Request $request)
    {
        $data = $request->all();
        $validation = Validator::make($data, [
            "name" => ["required", "string"],
            "surname" => ["required", "string"],
            "message" => ["required", "string"]
        ]);

        if ($validation->fails()) {
            return response()->json([
                "message" => $validation->errors(),
                "statusCode" => http_response_code()
            ]);
        } else {
            $added = Contact::Create([
                "name" => $data["name"],
                "surname" => $data["surname"],
                "message" => $data["message"]
            ]);
            if ($added) {
                $details = [
                    "name" => $data["name"],
                    "surname" => $data["surname"],
                    "message" => $data["message"]
                ];
                $sendToMail=[
                    "rkapucuoglu@socialthinks.com"
                ];
                \Mail::to($sendToMail)->send(
                    new \App\Mail\ContactMail($details));
                return response()->json([
                    "message" => "Database kaydı başarılı",
                    "statusCode" => http_response_code()
                ]);
            }
            else{
                return response()->json([
                    "message" => "Database kaydı gerçekleşemedi!",
                    "statusCode" => http_response_code()
                ]);
            }
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }
}
