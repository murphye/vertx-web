package io.vertx.ext.web.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.TreeSet;

import io.vertx.codegen.annotations.Fluent;

public class ParsedMIME implements Comparable<ParsedMIME>{
  
  private String component;
  private String subComponent;
  
  private Map<String, String> parameter;
  
  private static final String EMPTY = "";
  
  public ParsedMIME(String mimeComponent, String mimeSubComponent) {
    this.component = mimeComponent;
    this.subComponent = mimeSubComponent;
  }
  
  @Fluent
  public ParsedMIME addParameter(String key, String value) {
    ensureParameterExists();
    
    parameter.put(key, EMPTY);
    return this;
  }
  
  @Fluent
  public ParsedMIME addParameter(String key) {
    ensureParameterExists();
    
    parameter.put(key, EMPTY);
    return this;
  }
  
  private void ensureParameterExists() {
    if(parameter == null){
      parameter = new HashMap<>();
    }
  }

  private int compareParam1ToParam2(String param1, String param2){
    int param1IsStar = param1.equals("*") ? 0 : 1;
    int param2IsStar = param2.equals("*") ? 0 : 1;
    
    return param2IsStar - param1IsStar;
  }
  
  @Override
  public int compareTo(ParsedMIME other) {
    // The most specific is always the most relevant
    
    int componentComparison = compareParam1ToParam2(this.component, other.component);
    if(componentComparison != 0){
      return componentComparison;
    }
    
    int subComponentComparison = compareParam1ToParam2(this.subComponent, other.subComponent);
    if(subComponentComparison != 0){
      return subComponentComparison;
    }
    
    if(this.parameter == null && other.parameter == null){
      return 0;
    }
    
    return this.parameter == null ? 1 : -1;
  }
  
  @Override
  public int hashCode() {
    return Objects.hash(component, parameter, subComponent);
  }

  @Override
  public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    ParsedMIME other = (ParsedMIME) obj;
    return  Objects.equals(this.component, other.component) &&
            Objects.equals(this.subComponent, other.subComponent) &&
            Objects.equals(this.parameter, other.parameter);
  }

  @Override
  public String toString() {
    return "ParsedMIME [component=" + component + ", subComponent=" + subComponent + ", parameter=" + parameter + "]";
  }
  
}
