<?php

namespace App\Http\Traits;

use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rule;

trait ValidationRulesTrait
{

//    public function getValidationRules($model){}

    /**
     * Validation Rules for store new country
     *
     * @return \Illuminate\Support\Collection
     */
    public static function countryStoreRules()
    {
        return collect([
            'name' => 'required|string|min:1|max:255',
            'country_code' => 'required|string|min:1|max:10|unique:countries,country_code',
            'dial_code' => 'required|unique:countries,dial_code',
            'european_union' => 'required|integer|in:0,1',
        ]);
    }


    /**
     * Validation Rules for store new City
     *
     * @return \Illuminate\Support\Collection
     */
    public static function cityStoreRules()
    {
        return collect([
            'name' => 'string|min:1|max:255',
            'is_top' => 'integer|in:0,1',
            'country_id' => 'integer|exists:countries,country_id'
        ]);
    }


    /**
     * Validation Rules for store new Locality
     * @param $locality_name
     * @param $locality_pincode
     * @return \Illuminate\Support\Collection
     */
    public static function localityStoreRules($locality_name, $locality_pincode)
    {
        return collect([
            'pincode' => 'required|min:3|max:12|string',
            'name' => [
                "required", "string", "min:2", "max:255",
                Rule::unique('localities')->where(function ($query) use ($locality_pincode, $locality_name) {
                    return $query
                        ->whereNameAndPincode($locality_name, $locality_pincode);
                })
            ],
        ]);
    }


}