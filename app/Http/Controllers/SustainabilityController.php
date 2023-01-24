<?php

namespace App\Http\Controllers;

use App\Models\Sustainability;
use Illuminate\Http\Request;

class SustainabilityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getall()
    {
        $data = Sustainability::all();
        $data->
            map(
                function ($i) {
                    $alotImage = str_contains($i->image, ",");
                    if ($alotImage) { //coklu resim -slider
                        $i->image = sprintf(
                            "%s",
                            str_replace('\\\\', '/', $i->image)
                        );
                        $i->image = sprintf("%s", str_replace('sustainabilities', url('storage/sustainabilities'), $i->image));
                        $i->image = sprintf("%s", str_replace("\"", "", $i->image));
                        $i->image = sprintf("%s", str_replace("[", "", $i->image));
                        $i->image = sprintf("%s", str_replace("]", "", $i->image));
                    } else { //tekli resim-slider
                        $i->image = url(
                            sprintf(
                                "storage/%s",
                                str_replace('\\\\', '/', $i->image)
                            )
                        );
                        $i->image = sprintf("%s", str_replace("\"", "", $i->image));
                        $i->image = sprintf("%s", str_replace("[", "", $i->image));
                        $i->image = sprintf("%s", str_replace("]", "", $i->image));
                    }

                }
            );

        return response()->json([
           "data"=> $data
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        //
    }

}
